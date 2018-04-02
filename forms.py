from flask_wtf import FlaskForm
from wtforms import BooleanField, IntegerField, PasswordField, RadioField, SelectField, StringField, validators
from database import getCategories

# The form for posts
class PostForm(FlaskForm):
	title = StringField('Title', [validators.DataRequired(), validators.Length(max = 100)])
	description = StringField('Description', [validators.Optional(), validators.Length(max = 500)])
	category = RadioField('Category', choices = getCategories())
	authorName = StringField('Name', [validators.DataRequired(), validators.Length(max = 50)])
	email = StringField('Email', [validators.DataRequired(), validators.Email(), validators.Length(max = 100)])
	postType = RadioField('Post Type', choices = [('Request', 'Request'), ('Offer', 'Offer')])
	address1 = StringField('Address Line 1', [validators.Optional(), validators.Length(max = 100)])
	address2 = StringField('Address Line 2', [validators.Optional(), validators.Length(max = 100)])
	city = StringField('City', [validators.Optional(), validators.Length(max = 100)])
	state = StringField('State', [validators.Optional(), validators.Length(2)])
	zipCode = IntegerField('Zip', [validators.Optional(), validators.NumberRange(min = 10000, max = 99999)])

# The form for reporting a post
class ReportForm(FlaskForm):
	reason = SelectField('Reason', choices = [('inappropriate', 'Inappropriate'), ('spam', 'Spam'), ('discrimination', 'Discrimination'), ('safety', 'Safety'), ('other', 'other')])
	body = StringField('Body', [validators.DataRequired(), validators.Length(max = 500)])

# The form for replying to a post
class PostReplyForm(FlaskForm):
	authorName = StringField('Name', [validators.DataRequired(), validators.Length(max = 50)])
	message = StringField('Message', [validators.DataRequired(), validators.Length(max = 1000)])
	email = StringField('Email', [validators.DataRequired(), validators.Email(), validators.Length(max = 100)])