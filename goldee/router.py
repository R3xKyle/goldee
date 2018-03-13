from goldee import application

from goldee.views.index import IndexBP
from goldee.views.post import PostBP


application.register_blueprint(IndexBP)
application.register_blueprint(PostBP, url_prefix = '/post')