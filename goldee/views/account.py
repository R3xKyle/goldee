from flask import Blueprint, render_template, request
from werkzeug import secure_filename
from flask_login import login_user, logout_user

from goldee.models import User
from goldee.forms import LoginForm, SignUpForm

# where we put the signin view make sure to add werkzeug.secure_filename() -- see here http://werkzeug.pocoo.org/docs/0.12/utils/

AccountBP = Blueprint('account', __name__)


@AccountBP.route('/login', methods = ['GET', 'POST'])
def login():
	if current_user.is_authenticated:
		return redirect(url_for('index'))
	form = LoginForm()
	if form.validate_on_submit():
		user = User.query.filter_by(Email = form.email.data).first()
		if user is None or not user.check_password(form.password.data):
			flash("Invalid username or password.")
			return redirect(url_for('login'))
		login_user(user, remember=form.stayLoggedIn.data)
		flash('Logged in successfully.')
        
        next_page = request.args.get('next')
        if not next_page or url_parse(next_page).netloc != '':
            next_page = url_for('index')
        return redirect(next_page)
    return render_template('login.html', form = form)

@AccountBP.route('/signup', methods = ['GET', 'POST'])
def signup():
	if current_user.is_authenticated:
		return redirect(url_for('index'))
	form = SignUpForm()
	if form.validate_on_submit():
        user = User(Picture = form.picture.data, Email = form.email.data, FirstName = form.firstName.data, LastName = form.lastName.data, Address1 = form.address1.data, Address2 = form.address2.data, City = form.city.data, State = form.state.data, ZipCode = form.zipCode.data)
        user.set_password(form.password.data)
        db.session.add(user)
        db.session.commit()
        flash('Created account successfully. Please check your email for a verification link.') # Replace with whatever message Erin wants
        return redirect(url_for('index'))
    return render_template('signup.html', form = form)

@AccountBP.route('/logout')
def logout():
    logout_user()
    flash('Logged out successfully.')
    return redirect(url_for('index'))