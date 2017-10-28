import credentials

username = credentials.username
password = credentials.password
db_url = 'mysql+pymysql://{0}:{1}@goldeedb.crkebn7vcqw4.us-west-1.rds.amazonaws.com:3306/goldee'.format(username, password)
