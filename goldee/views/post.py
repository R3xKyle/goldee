from flask import Blueprint, render_template, request, redirect, flash

from goldee.models import Post, PendingPost, ReportedPost
from goldee.forms import PostForm, ReportForm
from goldee.database import insertSimple, activatePendingPost, getUserPost, reactivatePost

#from goldee.goldeeEmail import sendEmailNewPost

PostBP = Blueprint('/post', __name__, template_folder = "../frontEndFiles/")

@PostBP.route('/new', methods = ['GET', 'POST'])
def newPost():
	form = PostForm()
	if form.validate_on_submit():
		post = Post()
		post.Status = 'Pending'
		post.PostType = form.postType.data
		post.Title = form.title.data
		post.Description = form.description.data

		post.CategoryID = form.category.data
		post.AuthorName = form.authorName.data
		post.Email = form.email.data
		post.Address1 = form.address1.data
		post.Address2 = form.address2.data
		post.City =  form.city.data
		post.State = form.state.data
		post.Zip = form.zipCode.data

		try:
			postHash = insertNewPostAsPending(post)
			postLink = "www.gogoldee.com/post/new/" + postHash
		except:
			flash("We're sorry, something went wrong. Please try again.")
			return render_template('static/newpost_form.html', form = PostForm())

		# sendEmailNewPost(post.Email, post.AuthorName, post.Title, post.Description, postLink)
		flash("Your post has been saved. Please check your email to confirm posting!")
		return redirect('/newpost/contact')
	return render_template('static/newpost_form.html', form = form)


@PostBP.route('/new/<postHash>', methods = ['GET'])
def newPendingPost(postHash):
	postID = activatePendingPost(postHash)
	flash("Your post has been activated!")
	return redirect('/post/' + postID)

@PostBP.route('/<postID>', methods = ['GET'])
def getPost(postID):
	post = getUserPost(postID) # may need to change how getPost is implemented b/c we might need to return model object instead of query object.
	return render_template('static/getpost_form.html', post = post)

@PostBP.route('/<postID>/renew', methods = ['GET'])
def renewPost(postID):
	reactivatePost(postID)
	return redirect('/post/' + postID)

@PostBP.route('/<postID>/report', methods = ['GET', 'POST'])
def reportPost(postID):
	form = ReportForm()
	if form.validate_on_submit():
		report = ReportedPost()
		report.PostID = postID
		report.Reason = form.reason.data
		report.Body = form.body.data
		try:
			insertSimple(report)
		except:
			flash("We're sorry, something went wrong. Please try again.")
			return redirect('/' + postID + '/report') 

		flash("Your report has been submitted")
		return redirect('/')

	return render_template('static/reportpost_from.html', form = form)