from flask_wtf import FlaskForm
from wtforms import BooleanField, IntegerField, PasswordField, RadioField, SelectField, StringField, validators
from goldee.database import getCategories

# Login page form
class LoginForm(FlaskForm):
    email = StringField('Email', [validators.DataRequired()])
    password = PasswordField('Password', [validators.DataRequired()])
    stayLoggedIn = BooleanField('Stay Logged In') 

# All sign up details
class SignUpForm(FlaskForm):
    picture = FileField('Profile Picture', [FileRequired(), FileAllowed(['jpg', 'png'], 'Images only')])
    email = StringField('Email', [validators.DataRequired(), validators.Email(), validators.Length(max = 50)])
    password = PasswordField('New Password', [validators.DataRequired(), validators.EqualTo('confirmPassword', message = 'Passwords must match'), validators.Length(min = 8)])
    confirmPassword = PasswordField('Repeat Password')
    firstName = StringField('First Name', [validators.DataRequired(), validators.Length(max = 25)])
    lastName = StringField('Last Name', [validators.DataRequired(), validators.Length(max = 30)])
    address1 = StringField('Address Line 1', [validators.DataRequired(), validators.Length(max = 100)])
    address2 = StringField('Address Line 2', [validators.Optional(), validators.Length(max = 100)])
    city = StringField('City', [validators.DataRequired(), validators.Length(max = 100)])
    state = StringField('State', [validators.DataRequired(), validators.Length(2)])
    zipCode = IntegerField('Zip', [validators.DataRequired(), validators.NumberRange(min = 10000, max = 99999)])
    acceptTOS = BooleanField('I accept the Terms of Service', [validators.DataRequired()])

	# Confirm that the email is original
	def validate_email(self, email):
		user = User.query.filter_by(Email=email.data).first()
        if user is not None:
            raise ValidationError('Email address is already in use.')

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