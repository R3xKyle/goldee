# This file contains all the models for SQLAlchemy

from goldee import db

# Post Table Model
class Post(db.Model):
	__tablename__ = "Post"
	PostID = db.Column(db.Integer, primary_key = True)
	PostType = db.Column(db.Enum('Offer', 'Request'))
	Status = db.Column(db.Enum('Active', 'Pending', 'Accepted', 'Complete', 'Canceled', 'Inactive'))
	AuthorName = db.Column(db.String(100))
	Email = db.Column(db.String(100))
	Title = db.Column(db.String(100))
	Description = db.Column(db.String(500))
	CategoryID = db.Column(db.Integer, db.ForeignKey("Category.CategoryID"))
	Address1 = db.Column(db.String(100))
	Address2 = db.Column(db.String(100))
	City = db.Column(db.String(100))
	State = db.Column(db.String(2))
	Zip = db.Column(db.Integer)
	PostDate = db.Column(db.DateTime, default = db.func.now())

# Category Table Model
class Category(db.Model):
	__tablename__ = "Category"
	CategoryID = db.Column(db.Integer, primary_key = True)
	Name = db.Column(db.String(100))
	IsPublicOption = db.Column(db.Boolean)

# PendingPost Table Model
class PendingPost(db.Model):
	__tablename__ = "PendingPost"
	PostID = db.Column(db.Integer, db.ForeignKey("Post.PostID"), primary_key = True)
	HashValue = db.Column(db.String(64))

# ReportedPost Table Model
class ReportedPost(db.Model):
	__tablename__ = "ReportedPost"
	ReportID = db.Column(db.Integer, primary_key = True)
	PostID = db.Column(db.Integer, db.ForeignKey("Post.PostID"))
	Reason = db.Column(db.Enum('Inappropriate', 'Spam', 'Discrimination', 'Illegal', 'Safety', 'Other'))
	Body = db.Column(db.String(500))


db.create_all()