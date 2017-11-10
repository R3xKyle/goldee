from flask import Blueprint, render_template, request

IndexBP = Blueprint('index', __name__, url_prefix = '/')

#@IndexBP.route('/', methods = ['GET'])
#def index():