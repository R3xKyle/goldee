from flask import Blueprint, render_template, request

from goldee.database import insertSimple, getFeed

IndexBP = Blueprint('index', __name__, template_folder = "../frontEndFiles/dist")

@IndexBP.route('/', methods = ['GET'])
def index():
	return render_template('index.html')

@IndexBP.route('/feed',  methods = ['GET'])
def feed():
	page = request.args.get('page', 1, type=int)
	try:
		posts = getFeed(page, 93410)
		next_url = url_for('feed', page = posts.next_num) if posts.has_next else None
		prev_url = url_for('feed', page = posts.prev_num) if posts.has_prev else None
	except:
		flash("We're sorry, something went wrong.")
		return redirect('/')
	return render_template('feedpage.html', posts = posts.items, 
							next_url = next_url, prev_url = prev_url)
