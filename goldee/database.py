import hashlib

from goldee import db, application
from goldee.models import Post, Category, PendingPost, ReportedPost

def insertSimple(insertModel):
	try:
		db.session.add(insertModel)
		db.session.commit()
	except:
		raise


def getFeed(currentPage):
	try:
		tolerance = application.config['FEED_ZIP_TOLERANCE']
		posts_per_page = application.config['POSTS_PER_PAGE']
		posts = db.session.query(Post.PostID, Post.PostType, post.AuthorName, post.Title, post.Description, post.PostDate).\
		 filter(Post.Zip > zipCode - tolerance, Post.Zip < zipCode + tolerance).\
		 filter(Post.Status == "Active").\
		 order_by(Post.PostDate.desc()).\
		 paginate(currentPage, posts_per_page, False)
	except:
		raise
	return posts


def insertNewPostAsPending(post):
	try:
		db.session.add(post)
		db.session.flush()
		db.session.refresh(post)
		postID = post.PostID
		postIDHash = hashlib.md5(str(postID)).hexdigest()
		pendingPost = PendingPost()
		pendingPost.PostID = postID
		pendingPost.HashValue = postIDHash
		db.session.add(pendingPost)
		db.session.commit()
	except:
		db.session.rollback()

	return postIDHash


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
		raise

	return postID

def reactivatePost(postID):
	try:
		postQuery = db.session.query(Post).\
		 filter(Post.PostID == postID).\
		 filter(Post.Status == "Active").\
		 update({Post.Status: "Active", Post.PostDate: db.func.now()}, synchronize_session=False)
		db.session.commit()
	except:
		raise

def getExpiringPosts():
	try:
		currentTime = db.func.now()
		postQuery = db.session.query(Post.PostID, Post.AuthorName, Post.Email, Post.Title).\
		 filter(Post.Status == "Active").\
		 filter(Post.PostDate.between(currentTime - timedelta(days = 6), currentTime - timedelta(days = 5))).\
		 all()
		return postQuery
	except:
		raise

   
def getCategories():
	try:
		categoriesQuery = db.session.query(Category.CategoryID, Category.Name).\
		 order_by(Category.Name).all()
		categories = []
		for cat in categoriesQuery:
		   categories.append((str(cat.CategoryID), cat.Name))
		return categories
	except:
		raise

def getUserPost(postID):
	try:
		postQuery = db.session.query(Post.PostID, Post.AuthorName, Post.Title, Post.Description, Post.CategoryID, Post.PostDate, Post.PostType).\
		 filter(Post.PostID == postID).one()
	except:
		raise

	post = Post()
	post.PostID = postQuery.PostID
	post.Title = postQuery.Title
	post.Description = postQuery.Description
	post.CategoryID = postQuery.CategoryID
	post.AuthorName = postQuery.AuthorName
	post.postDate = postQuery.PostDate
	return post