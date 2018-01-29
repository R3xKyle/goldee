from flask import Blueprint, render_template, request
from werkzeug import secure_filename
import os

from goldee.database import insertSimple
from goldee.forms import PostForm
from goldee.models import Post

PostBP = Blueprint('/post', __name__)

@PostBP.route('/new', methods = ['GET', 'POST'])
def newPost():
	form = PostForm()
	if form.validate_on_submit():
		post = Post()
		post.Status = 'Active'
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
		post.Picture = form.picture.data.save(os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(form.picture.data)))
		database.insertSimple(post)
    return render_template('splashPage.html', form = form)

@PostBP.route('/<postID>', methods = ['GET'])
def getPost(postID):
	post = database.getPost(postID) # may need to change how getPost is implemented b/c we might need to return model object instead of query object.
	return render_template('postPage.html', post = post)