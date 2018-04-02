import hashlib

from __init__ import db, app
from models import Post, Category, PendingPost, ReportedPost
import datetime

# Inserts a simple model into the database
def insertSimple(insertModel):
	try:
		db.session.add(insertModel)
		db.session.commit()
	except:
		pass
	return

# Returns the paginated feed containing posts within the FEED_ZIP_TOLERANCE of zipCode and whose Title contains query
def getFeed(currentPage, zipCode, query):
   try:
       filterQuery = '%' + query + '%'
       tolerance = app.config['FEED_ZIP_TOLERANCE']
       posts_per_page = app.config['POSTS_PER_PAGE']
       posts = db.session.query(Post.PostID, Post.PostType, Post.AuthorName, Post.Title, Post.Description, Post.PostDate).\
        filter(Post.Zip > zipCode - tolerance, Post.Zip < zipCode + tolerance).\
        filter(Post.Status == "Active").\
        filter(Post.Title.like(filterQuery)).\
        order_by(Post.PostDate.desc()).\
        paginate(currentPage, posts_per_page, False)
   except:
       return
   return posts

# This rollsback the database
def databaseRollback():
	db.session.rollback()

# This inserts a pending post into the database
# This is called on new post creation, needs to be activated with email link
def insertNewPostAsPending(post):
	try:
		db.session.add(post)
		db.session.flush()
		db.session.refresh(post)
		postID = post.PostID
		postIDHash = hashlib.md5(str(postID).encode()).hexdigest()
		pendingPost = PendingPost()
		pendingPost.PostID = postID
		pendingPost.HashValue = postIDHash
		db.session.add(pendingPost)
		db.session.commit()
	except Exception as e:
		db.session.rollback()
		return

	return postIDHash

# Checks PendingPost table for postHash and activates the corresponding post in Post table.
def activatePendingPost(postHash):
	try:
		postID = db.session.query(PendingPost.PostID).\
		 filter(PendingPost.HashValue == postHash).one()[0]
		db.session.query(Post).filter(Post.PostID == postID).\
		 update({Post.Status: "Active"}, synchronize_session=False)
		db.session.query(PendingPost).filter(PendingPost.HashValue == postHash).\
		 delete()
		db.session.commit()
	except:
		db.session.rollback()

	return postID

# Extends the post's life by 7 days
def reactivatePost(postID):
	try:
		postQuery = db.session.query(Post).\
		 filter(Post.PostID == postID).\
		 filter(Post.Status == "Active").\
		 update({Post.PostDate: db.func.now()}, synchronize_session=False)
		db.session.commit()
	except:
		db.session.rollback()

# Returns all posts that have a current lifetime of 5-6 days.
def getExpiringPosts():
	try:
		currentTime = db.func.now()
		postQuery = db.session.query(Post.PostID, Post.AuthorName, Post.Email, Post.Title).\
		 filter(Post.Status == "Active").\
		 filter(Post.PostDate.between(currentTime - datetime.timedelta(days = 6), currentTime - datetime.timedelta(days = 5))).\
		 all()
		return postQuery
	except:
		pass
	return

# Delete all posts that are active with a lifetime > 7 days.
def deleteExpiredPosts():
	try:
		currentTime = datetime.datetime.now()
		postQuery = db.session.query(Post).\
		 filter(Post.Status == "Active").\
		 filter(Post.PostDate < currentTime - datetime.timedelta(days = 7)).\
		 delete()
		db.session.commit()
	except:
		pass
	return
	

# returns a list of all the categories in the database in the format (categoryID, categoryName)
def getCategories():
	try:
		categoriesQuery = db.session.query(Category.CategoryID, Category.Name).\
		 order_by(Category.Name).all()
		categories = []
		for cat in categoriesQuery:
		   categories.append((str(cat.CategoryID), cat.Name))
		return categories
	except:
		pass
	return

# Returns a post model without sensitive data
def getUserPost(postID):
	try:
		postQuery = db.session.query(Post.PostID, Post.AuthorName, Post.Title, Post.Description, Post.CategoryID, Post.PostDate, Post.PostType).\
		 filter(Post.PostID == postID).one()
	except:
		return

	post = Post()
	post.PostID = postQuery.PostID
	post.Title = postQuery.Title
	post.Description = postQuery.Description
	post.CategoryID = postQuery.CategoryID
	post.AuthorName = postQuery.AuthorName
	post.postDate = postQuery.PostDate
	return post

# Returns a post model with all data
def getPostDetails(postID):
	try:
		postQuery = db.session.query(Post).\
		 filter(Post.PostID == postID).one()
	except:
		return
	return postQuery

def dropAllTables():
	db.drop_all()