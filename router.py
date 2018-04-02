# Adds all routes to router.py

from __init__ import app

# imports blueprints
from views.index import IndexBP
from views.post import PostBP

# Registers blueprints
app.register_blueprint(IndexBP)
app.register_blueprint(PostBP, url_prefix = '/post')