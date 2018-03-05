from flask import Blueprint, render_template, request
from flask_login import current_user, login_required
from goldee.models import User
from goldee.database import getCategories, getSubcategories #insertSubcategories,

UserBP = Blueprint('user', __name__, url_prefix = '/user')


@UserBP.route('/selectCategories', methods = ['GET', 'POST'])
@login_required
def selectCategories():
    if request.method == 'GET':
        return render_template('categories.html', categories = getCategories())
    elif request.method == 'POST':
        categoriesToDo = request.args.get('categoriesToDo') # ensure this comes in a list and is not empty
        if categoriesToDo:
            session['categoriesToDo'] = categoriesToDo
            return redirect(url_for('.selectSubcategories'))
        else:
            return redirect(url_for('index.index')) # wherever they need to go after they finish inputting all skills, etc.

@UserBP.route('/selectSubcategories', methods = ['GET', 'POST'])
@login_required
def selectSubcategories():
    if request.method == 'POST':
        subcategories = request.args.get('subcategories')
        #database.insertSubcategories(current_user, subcategories)


    if session['categoriesToDo']:
        categoryID = session['categoriesToDo'][0]
        session['categoriesToDo'] = session['categoriesToDo'][1:]
        return render_template('subcategories.html', subcategories = getSubcategories(categoryID))
    else:
        return redirect(url_for('index.index')) # wherever they need to go after they finish inputting all skills, etc.
