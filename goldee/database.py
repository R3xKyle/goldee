from goldee.models import db, Post, Category, PendingPost

def getFeed(zipCode, tolerance):
    try:
        feedQuery = db.session.query(Post).filter(Post.Zip > zipCode - tolerance, Post.Zip < zipCode + tolerance).\
         filter(Post.Status == "Active").\
         order_by(Post.PostDate.desc())
        return feedQuery
    except:
        raise

# insert, Get, Update
def insertSimple(insertModel):
    try:
        db.session.add(insertModel)
        db.session.commit()
    except:
        raise

def getUser(userID):
    try:
        query = db.session.query(SimpleUser.Name, SimpleUser.Email).filter(SimpleUser.UserID == userID).one()
        return query
    except:
        raise

'''
def testDBEverything():
    try:
        user = User()
        user.FirstName = 'Bob'
        user.LastName = 'Yes'
        user.Email = 'Bob@bob'
        user.Address1 = 'y'
        user.City = 's'
        user.State = 'YO'
        user.Zip = 12345
        user.Picture = 'yes/yes/yes.jpg'
        user.HashValue = 'asldkjfhlsado'
        db.session.add(user)
        db.session.commit()
    except:
        raise

    try:
        userQuery = db.session.query(User.FirstName, User.Zip).all()
        print(userQuery)
    except:
        raise

    try:
        db.session.query(User).delete()
        db.session.commit()
    except:
        raise
'''


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
        print("WHY ARE YOU HERE")
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

def deletePost(postID):
    try:
        postQuery = db.session.query(Post).\
         filter(Post.PostID == postID).\
         delete()
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

def deleteExpiredPosts():
    try:
        currentTime = db.func.now()
        postQuery = db.session.query(Post).\
         filter(Post.Status == "Active").\
         filter(Post.PostDate < currentTime - timedelta(days = 7)).\
         delete()
        db.session.commit()
    except:
        raise


def getNewPostID(authorName, postTitle, postDescription):
    try:
        postQuery = db.session.query(Post.PostID).\
         filter(Post.AuthorName == authorName).\
         filter(Post.Title == postTitle).\
         filter(Post.Description == postDescription).\
         order_by(Post.PostDate.desc()).one()
        return postQuery[0]
    except:
        raise



'''
def getSubcategories(categoryID):
    try:
        subcategoriesQuery = db.session.query(Subcategory.SubcategoryID, Subcategory.Name).\
         filter(Subcategory.CategoryID == categoryID).\
         order_by(Subcategory.Name).all()
        subcategories = [(subcategory.SubcategoryID, subcategory.Name) for subcategory in subcategoriesQuery]
        return subcategories
    except:
        raise
'''

def getCategories():
    #return [(1, "HEllo")]
    try:
        categoriesQuery = db.session.query(Category.CategoryID, Category.Name).\
         order_by(Category.Name).all()
        categories = []
        for cat in categoriesQuery:
           categories.append((str(cat.CategoryID), cat.Name))
        return categories
    except:
        raise

#def insertSubcategories():


def getUserPost(postID):
    try:
        postQuery = db.session.query(Post.PostID, Post.AuthorName, Post.Title, Post.Description, Post.Picture, Post.CategoryID, Post.PostDate, Post.PostType).\
         filter(Post.PostID == postID).one()
    except:
        raise
    # return postQuery
    post = Post()
    post.PostID = postQuery.PostID
    post.Title = postQuery.Title
    post.Description = postQuery.Description
    # post.CategoryID = postQuery.CategoryID
    post.AuthorName = postQuery.AuthorName
    #post.postDate = postQuery.Date
    #post.Picture
    return post
