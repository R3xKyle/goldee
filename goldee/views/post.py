from flask import Blueprint, render_template, request, jsonify, redirect
from werkzeug import secure_filename
import hashlib
import os

from goldee.database import insertSimple, activatePendingPost, getUserPost, getNewPostID, reactivatePost
from goldee.forms import PostForm, ReportForm
from goldee.models import Post, PendingPost, ReportedPost
from goldee.goldeeEmail import sendEmailNewPost

PostBP = Blueprint('/post', __name__, template_folder = "../frontEndFiles")

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
		#post.Picture = form.picture.data.save(os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(form.picture.data)))
		insertSimple(post)

		postID = getNewPostID(post.AuthorName, post.Title, post.Description)

		postIDHash = hashlib.md5(str(postID)).hexdigest()
		postLink = "www.gogoldee.com/post/new/" + postIDHash

		pendingPost = PendingPost()
		pendingPost.PostID = postID
		pendingPost.HashValue = postIDHash
		insertSimple(pendingPost)

		# sendEmailNewPost(post.Email, post.AuthorName, post.Title, post.Description, postLink)
		return redirect('/newpost/contact')
	return render_template('static/newpost_form.html', form = form)


@PostBP.route('/new/<postHash>', methods = ['GET'])
def newPendingPost(postHash):
	postID = activatePendingPost(postHash)
	return redirect('/post/' + postID)

@PostBP.route('/<postID>', methods = ['GET'])
def getPost(postID):
	post = getUserPost(postID) # may need to change how getPost is implemented b/c we might need to return model object instead of query object.
	return render_template('static/getpost_form.html', post = post)

@PostBP.route('/<postID>/renew', methods = ['GET', 'POST'])
def renewPost(postID):
	reactivatePost(postID)
	return redirect('/post/' + postID)

@PostBP.route('/<postID>/report', methods = ['GET', 'POST'])
def reportPost(postID):
	#form = ReportForm()
	form = ReportForm.from_json(request.json)
	if form.validate_on_submit():
		report = ReportedPost()
		report.PostID = postID
		report.Reason = form.reason.data
		report.Body = form.body.data
		insertSimple(report)

	return render_template('static/reportpost_from.html', form = form)
