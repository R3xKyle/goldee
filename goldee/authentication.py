import os
from werkzeug.security import generate_password_hash, check_password_hash

def check_password(userEmail, password):
    hashValue = db_session.query(User.HashValue).filter(User.Email == userEmail).one()
    return check_password_hash(hashValue, password)


#def generate_salt():
#    return (os.urandom(8).encode('base-64'))[:8]

def generate_hash(password):
    return generate_password_hash(password, method='pbkdf2:sha256', salt_length=8)