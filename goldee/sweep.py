from goldee.database import getExpiringPosts, deleteExpiredPosts
from goldee.goldeeEmail import sendEmailPostExpiring
import threading
import time

class DatabaseSweep():
	def __init__(self, interval = 60 * 60 * 24):
		self.interval = interval
		thread = threading.Thread(self.run, args=())
		thread.daemon = True
		thread.start()
	
	def run(self):
		while True:
			expiringPosts = getExpiringPosts()
			processExpiringPosts(expiringPosts)
			deleteExpiredPosts()

			time.sleep(self.interval)

	def processExpiringPosts(expiringPosts):
		for post in expiringPosts:
			renewLink = "www.gogoldee.com/post/" + post.PostID + "/renew"
			sendEmailPostExpiring(post.Email, post.AuthorName, post.Title, renewLink)


