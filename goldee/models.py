# This is where you define the models of your application. This may be split into several modules in the same way as views.py.
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


class SimpleUser(db.Model):
	__tablename__ == "SimpleUser"
	UserID = db.Column(db.Integer, primary_key = True)
	Name = db.Column(db.String(50))
	Email = db.Column(db.String(50))
	SignUpDate = db.Column(db.DateTime, default = db.func.now())

class User(db.Model):
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

class Category(db.Model):
	__tablename__ = "Category"
	CategoryID = db.Column(db.Integer, primary_key = True)
	Name = db.Column(db.String(100))
	IsPublicOption = db.Column(db.Boolean)

class Post(db.Model):
	__tablename__ = "Post"
	PostID = db.Column(db.Integer, primary_key = True)
	PostType = db.Column(db.Enum('Offer', 'Request'))
	Status = db.Column(db.Enum('Active','Accepted', 'Complete', 'Canceled', 'Inactive'))
	#AuthorID = db.Column(db.Integer, db.ForeignKey("User.UserID"))
	#HelperID = db.Column(db.Integer, db.ForeignKey("User.UserID"))
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
	Picture = db.Column(db.String(100))
	#EstimatedTime = db.Column(db.Enum('15 Minutes', '30 Minutes', '1 Hour', '2 Hours', '4 Hours', '8 Hours'))
	PostDate = db.Column(db.DateTime, default = db.func.now())
	#ExpirationDate = db.Column(db.DateTime) # This one is still in question
	#AcceptanceDate = db.Column(db.DateTime)
	#LastUpdated = db.Column(db.DateTime, default = db.func.now())

class Conversation(db.Model):
	__tablename__ = "Conversation"
	ConversationID = db.Column(db.Integer, primary_key = True)
	PostID = db.Column(db.Integer, db.ForeignKey("Post.PostID"))
	HelperID = db.Column(db.Integer, db.ForeignKey("User.UserID"))
	PostAuthorID = db.Column(db.Integer, db.ForeignKey("User.UserID"))
	LastMessage = db.Column(db.DateTime, default = db.func.now())
	IsRead = db.Column(db.Boolean, default = False)

class Report(db.Model):
	__tablename__ = "Report"
	ReportID = db.Column(db.Integer, primary_key = True)
	AuthorID = db.Column(db.Integer, db.ForeignKey("User.UserID"))
	RecipientID = db.Column(db.Integer, db.ForeignKey("User.UserID"))
	Reason = db.Column(db.Enum('Inappropriate', 'Spam', 'Discrimination', 'Illegal', 'Safety', 'Other'))
	Body = db.Column(db.String(500))

class Skill(db.Model):
	__tablename__ = "Skill"
	SkillID = db.Column(db.Integer, primary_key = True)
	Name = db.Column(db.String(100))
	IsPublicOption = db.Column(db.Boolean)

class Community(db.Model):
	__tablename__ = "Community"
	CommunityID = db.Column(db.Integer, primary_key = True)
	Name = db.Column(db.String(100))
	Description = db.Column(db.String(500))
	CreationDate = db.Column(db.Date, default = db.func.now())
	IsPublic = db.Column(db.Boolean)
	Picture = db.Column(db.String(100))
	Address1 = db.Column(db.String(100))
	Address2 = db.Column(db.String(100))
	City = db.Column(db.String(100))
	State = db.Column(db.String(2))
	Zip = db.Column(db.Integer)
	UserCount = db.Column(db.Integer) # This one is still in question
	MaxUser = db.Column(db.Integer) # This one is still in question (Maybe -1 for unlimited)

class Review(db.Model):
	__tablename__ = "Review"
	ReviewID = db.Column(db.Integer, primary_key = True)
	AuthorID = db.Column(db.Integer, db.ForeignKey("User.UserID"))
	RecipientID = db.Column(db.Integer, db.ForeignKey("User.UserID"))
	PostID = db.Column(db.Integer, db.ForeignKey("Post.PostID"))
	ReviewDate = db.Column(db.Date)
	Rating = db.Column(db.Integer) # This one is still in question
	Body = db.Column(db.String(500))
	IsPublic = db.Column(db.Boolean)

class Resource(db.Model):
	__tablename__ = "Resource"
	ResourceID = db.Column(db.Integer, primary_key = True)
	Name = db.Column(db.String(100))
	IsPublicOption = db.Column(db.Boolean)

class Membership(db.Model):
	__tablename__ = "Membership"
	UserID = db.Column(db.Integer, db.ForeignKey("User.UserID"), primary_key = True)
	CommunityID = db.Column(db.Integer, db.ForeignKey("Community.CommunityID"), primary_key = True)
	Role = db.Column(db.Enum('Admin', 'Owner', 'Member')) # Might need to touch up this more (admin, member, owner)

class CustomMessage(db.Model):
	__tablename__ = "CustomMessage"
	CustomMessageID = db.Column(db.Integer, primary_key = True)
	UserID = db.Column(db.Integer, db.ForeignKey("User.UserID"))
	Title = db.Column(db.String(50))
	Body = db.Column(db.String(500))
	UseCount = db.Column(db.Integer) # This one is still in question
	LastUsed = db.Column(db.DateTime, default = db.func.now()) # This one is still in question

class Message(db.Model):
	__tablename__ = "Message"
	MessageID = db.Column(db.Integer, primary_key = True)
	ConversationID = db.Column(db.Integer, db.ForeignKey("Conversation.ConversationID"))
	AuthorID = db.Column(db.Integer, db.ForeignKey("User.UserID"))
	Timestamp = db.Column(db.Integer, default = db.func.now())
	Body = db.Column(db.String(500))

class UserSkill(db.Model):
	__tablename__ = "UserSkill"
	UserID = db.Column(db.Integer, db.ForeignKey("User.UserID"), primary_key = True)
	SkillID = db.Column(db.Integer, db.ForeignKey("Skill.SkillID"), primary_key = True)

class PostCategory(db.Model):
	__tablename__ = "PostCategory"
	PostID = db.Column(db.Integer, db.ForeignKey("Post.PostID"), primary_key = True)
	CategoryID = db.Column(db.Integer, db.ForeignKey("Category.CategoryID"), primary_key = True)

class PostCommunity(db.Model):
	__tablename__ = "PostCommunity"
	PostID = db.Column(db.Integer, db.ForeignKey("Post.PostID"), primary_key = True)
	CommunityID = db.Column(db.Integer, db.ForeignKey("Community.CommunityID"), primary_key = True)

class UserResource(db.Model):
	__tablename__ = "UserResource"
	UserID = db.Column(db.Integer, db.ForeignKey("User.UserID"), primary_key = True)
	ResourceID = db.Column(db.Integer, db.ForeignKey("Resource.ResourceID"), primary_key = True)

class Feedback(db.Model):
	__tablename__ = "Feedback"
	FeedbackID = db.Column(db.Integer, primary_key = True)
	AuthorID = db.Column(db.Integer, db.ForeignKey("User.UserID"))
	Body = db.Column(db.String(500))

class CanceledPost(db.Model):
	__tablename__ = "CanceledPost"
	PostID = db.Column(db.Integer, db.ForeignKey("Post.PostID"), primary_key = True)
	UserID = db.Column(db.Integer, db.ForeignKey("User.UserID"), primary_key = True)
	Reason = db.Column(db.String(500)) # Maybe change name to 'Body' to be consistent?