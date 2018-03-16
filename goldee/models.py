# This file contains all the models for SQLAlchemy

from goldee import db
from flask_login import UserMixin
from app import login
from werkzeug.security import generate_password_hash, check_password_hash

@login.user_loader
def load_user(id):
	return User.query.get(int(id))

class User(UserMixin, db.Model):
	__tablename__ = "User"
	UserID = db.Column(db.Integer, primary_key = True)
	FirstName = db.Column(db.String(25))
	LastName = db.Column(db.String(30))
	Email = db.Column(db.String(50))
	HashValue = db.Column(db.String(93))
	Phone = db.Column(db.String(12))
	Picture = db.Column(db.String(100))
	Address1 = db.Column(db.String(100))
	Address2 = db.Column(db.String(100))
	City = db.Column(db.String(100))
	State = db.Column(db.String(2))
	Zip = db.Column(db.Integer)
	JoinDate = db.Column(db.Date, default = db.func.now())
	ContactMethod = db.Column(db.Enum('Email', 'Text'))
	Bio = db.Column(db.String(500))
	FamilyInfo = db.Column(db.String(500))
	DisabilityInfo = db.Column(db.String(500))
	Posts = db.relationship('Post', backref='author', lazy='dynamic')

	def set_password(self, password):
        self.HashValue = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.HashValue, password)

# Post Table Model
class Post(db.Model):
	__tablename__ = "Post"
	PostID = db.Column(db.Integer, primary_key = True)
	PostType = db.Column(db.Enum('Offer', 'Request'))
	Status = db.Column(db.Enum('Active', 'Pending', 'Accepted', 'Complete', 'Canceled', 'Inactive'))
	UserID = db.Column(db.Integer, db.ForeignKey("User.UserID"))
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