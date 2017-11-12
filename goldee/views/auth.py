from flask import Blueprint, render_template, request
from werkzeug import secure_filename


# where we put the signin view make sure to add werkzeug.secure_filename() -- see here http://werkzeug.pocoo.org/docs/0.12/utils/

AuthenticationBP = Blueprint('auth', __name__, url_prefix = '/auth')


from goldee.authentication import generate_hash, login_manager
from goldee.database import insertUser
from goldee.models import User
from goldee.forms import LoginForm, SignUpForm

class AuthUser():
    def __init__(self, id):
        self.id = id
        self.authenticated = False

    def is_authenticated(self):
        return self.authenticated

    def is_active(self):
        return True
    
    def is_anonymous(self):
        return not self.authenticated
    
    def get_id(self):
        return self.id

    def login(self):
        self.authenticated = True



@AuthenticationBP.route('/login', methods = ['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        # validate user
        #user = #instance of AuthUser
        login_user(user)
        flask.flash('Logged in successfully.')
        next = flask.request.args.get('next')

        if not is_safe_url(next):
            return flask.abort(400)
        
        return flask.redirect(next or flask.url_for('index.index'))
    return render_template('login.html', form = form)

@AuthenticationBP.route('/signup', methods = ['GET', 'POST'])
def signUp():
    form = SignUpForm()
    if form.validate_on_submit():
        user = User()
        user.FirstName = form.firstName.data
        user.LastName = form.lastName.data
        user.Email = form.email.data
        user.HashValue = generate_hash(form.password.data)
        user.Address1 = form.address1.data
        if form.address2.data:
            user.Address2 = form.address2.data
        user.City = form.city.data
        user.State = form.state.data
        user.Zip = form.zip.data
        user.Picture = form.picture.data.save(os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(form.picture.data)))
        database.insertUser(user)
        return flask.redirect(flask.url_for('user.selectCategories'))
    return render_template('signUp.html', form = form)
    