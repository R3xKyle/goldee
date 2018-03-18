from flask import Blueprint, render_template, request, flash, redirect

from goldee.database import insertSimple, getFeed, getFeedWithQuery

# Creates the blueprint for any / routes
IndexBP = Blueprint('index', __name__, template_folder = "../frontEndFiles/dist")

# Returns the index.html from path frontEndFiles/dist/
@IndexBP.route('/', methods = ['GET'])
def index():
	return render_template('index.html')

# Generates the feed and returns frontEndFiles/dist/static/feedpage rendered with appropriate information
# Feed is paginated
@IndexBP.route('/feed',  methods = ['GET'])
def feed():
	page = request.args.get('page', 1, type=int) # Gets the current page of the feed, defaults to 1
	query = request.args.get('query') # Gets the search query for the feed
	zipCode = request.args.get('zip') # Gets the zip for the feed
	try:
		if query != None:
			posts = getFeedWithQuery(page, zipCode, query)
		else:
			posts = getFeed(page, zipCode)
		next_url = url_for('feed', page = posts.next_num) if posts.has_next else None
		prev_url = url_for('feed', page = posts.prev_num) if posts.has_prev else None
	except:
		flash("We're sorry, something went wrong.")
		return redirect('/')
	return render_template('static/feedpage.html', posts = posts.items, 
							next_url = next_url, prev_url = prev_url)

# Returns the about page
@IndexBP.route('/about', methods = ['GET'])
def about():
	return render_template('static/aboutpage.html')

# Catches all routes not mapped and returns to single page vue app
# This function allows vue to have different routes for same endpoint
@IndexBP.route('/<path:path>')
def catch_all(path):
	return render_template("index.html")
