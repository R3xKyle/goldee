from flask_wtf.csrf import CSRFProtect

from goldee import application

CSRFProtect(application)