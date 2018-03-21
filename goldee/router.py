# Adds all routes to router.py

from goldee import application

# imports blueprints
from goldee.views.index import IndexBP
from goldee.views.account import AccountBP
from goldee.views.post import PostBP

# Registers blueprints
application.register_blueprint(IndexBP)
application.register_blueprint(AccountBP, url_prefix = '/account')
application.register_blueprint(PostBP, url_prefix = '/post')