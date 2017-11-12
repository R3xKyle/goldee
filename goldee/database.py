from goldee.models import db, User, Category

# insert, Get, Update

def insertUser(user):
    try:
        db.session.add(user)
        db.session.commit()
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

def getSubcategories(categoryID):
    try:
        subcategoriesQuery = db.session.query(Subcategory.SubcategoryID, Subcategory.Name).\
         filter_by(Subcategory.CategoryID == categoryID).\
         order_by(Subcategory.Name).all()
        subcategories = [(subcategory.SubcategoryID, subcategory.Name) for subcategory in subcategoriesQuery]
        return subcategories
    except:
        raise


def getCategories():
    try:
        categoriesQuery = db.session.query(Category.CategoryID, Category.Name).\
         order_by(Category.Name).all()
        categories = [(category.CategoryID, category.Name) for category in categoriesQuery]
        return categories
    except:
        raise

#def insertSubcategories():
