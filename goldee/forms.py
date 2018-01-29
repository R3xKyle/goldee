from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileRequired, FileAllowed
from wtforms import BooleanField, IntegerField, PasswordField, RadioField, SelectField, StringField, validators
from goldee.database import getCategories

class LoginForm(FlaskForm):
    email = StringField('Email', [validators.DataRequired()])
    password = PasswordField('Password', [validators.DataRequired()])
    stayLoggedIn = BooleanField('Stay Logged In') 

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


class PostForm(FlaskForm):
    title = StringField('Title', [validators.DataRequired(), validators.Length(max = 100)])
    description = StringField('Description', [validators.optional(), validators.Length(max = 500)])
    category = SelectField('Category', choices = getCategories())
    authorName = StringField('Name', [validators.DataRequired(), validators.Length(max = 50)])
    email = StringField('Email', [validators.DataRequired(), validators.Email(), validators.Length(max = 100)])
    postType = RadioField('Request', 'Offer')
    #addressType = RadioField('Use Profile Address', 'Use Current Location', 'Use Custom Address')
    # Depending on addressType's value, the bottom fields will/won't be displayed
    # On front end, certain fields will need to be 'grayed-out' depending on if 'Use Custom Address' is selected
    address1 = StringField('Address Line 1', [validators.Optional(), validators.Length(max = 100)])
    address2 = StringField('Address Line 2', [validators.Optional(), validators.Length(max = 100)])
    city = StringField('City', [validators.Optional(), validators.Length(max = 100)])
    state = StringField('State', [validators.Optional(), validators.Length(2)])
    zipCode = IntegerField('Zip', [validators.Optional(), validators.NumberRange(min = 10000, max = 99999)])
    picture = FileField('Profile Picture', [FileRequired(), FileAllowed(['jpg', 'png'], 'Images only')])


class ReportForm(FlaskForm):
    reason = SelectField('Reason', choices = [('inappropriate', 'Inappropriate'), ('spam', 'Spam'), ('discrimination', 'Discrimination'), ('safety', 'Safety'), ('other', 'other')])
    body = StringField('Body', [validators.DataRequired(), validators.Length(max = 500)])

#class ReviewForm(FlaskForm):

#class CommunityForm(FlaskForm):


# form.<field>.data = <actual data>
class SettingsForm(FlaskForm):
    picture = FileField('Profile Picture', [FileRequired(), FileAllowed(['jpg', 'png'], 'Images only')])
    email = StringField('Email', [validators.DataRequired(), validators.Email(), validators.Length(max = 50)])
    firstName = StringField('First Name', [validators.DataRequired(), validators.Length(max = 25)])
    lastName = StringField('Last Name', [validators.DataRequired(), validators.Length(max = 30)])
    address1 = StringField('Address Line 1', [validators.DataRequired(), validators.Length(max = 100)])
    address2 = StringField('Address Line 2', [validators.Optional(), validators.Length(max = 100)])
    city = StringField('City', [validators.DataRequired(), validators.Length(max = 100)])
    state = StringField('State', [validators.DataRequired(), validators.Length(2)])
    zipCode = IntegerField('Zip', [validators.DataRequired(), validators.NumberRange(min = 10000, max = 99999)])

class ChangePasswordForm(FlaskForm):
    oldPassword = PasswordField('Old Password', [validators.DataRequired()])
    password = PasswordField('New Password', [validators.DataRequired(), validators.EqualTo('confirmPassword', message = 'Passwords must match'), validators.Length(min = 8)])
    confirmPassword = PasswordField('Repeat New Password')
    

class SplashPageForm(FlaskForm):
    name = StringField('First Name', [validators.DataRequired(), validators.Length(max = 50)])
    email = StringField('Email', [validators.DataRequired(), validators.Email(), validators.Length(max = 50)])