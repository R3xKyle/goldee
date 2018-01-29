from flask import Blueprint, render_template, request


IndexBP = Blueprint('index', __name__, template_folder="../frontEndFiles")

from goldee.model import SimpleUser
from goldee.database import insertSimple
from goldee.forms import SplashPageForm

@IndexBP.route('/', methods = ['GET', 'POST'])
def index():
    form = SplashPageForm()
    if form.validate_on_submit():
        user = SimpleUser()
        user.Name = form.name.data
        user.Email = form.email.data
        database.insertSimple(user)
    return render_template('splashPage.html', form = form)


@IndexBP.route('/feed', methods = ['GET', 'POST'])
def feed():
