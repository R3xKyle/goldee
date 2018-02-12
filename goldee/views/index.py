from flask import Blueprint, render_template, request
from goldee.database import insertSimple, getUser, getFeed


IndexBP = Blueprint('index', __name__, template_folder = "../frontEndFiles")


from goldee.models import SimpleUser
from goldee.database import insertSimple
from goldee.forms import SimpleUserForm

'''
@IndexBP.route('/', methods = ['GET', 'POST'])
def index():
	zip = 93410
	return render_template("index.html", posts = getFeed(zip, 20))
'''

@IndexBP.route('/', methods = ['GET', 'POST'])
def index():
    form = SimpleUserForm()
    if form.validate_on_submit():
        user = SimpleUser()
        user.Name = form.name.data
        user.Email = form.email.data
        insertSimple(user)
    return render_template('index.html', form = form)




