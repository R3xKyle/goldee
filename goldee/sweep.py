from goldee.database import getExpiringPosts, deleteExpiredPosts
from goldee.email import sendEmailPostExpiring
import threading
import time

class DatabaseSweep():
	def __init__(self, interval = 60 * 60 * 24):
		self.interval = interval
		thread = threading.Thread(target=self.run, args=())
		thread.daemon = True
		thread.start()
	
	def processExpiringPosts(self, expiringPosts):
		for post in expiringPosts:
			renewLink = "www.gogoldee.com/post/" + post.PostID + "/renew"
			sendEmailPostExpiring(post.Email, post.AuthorName, post.Title, renewLink)

	def run(self):
		while True:
			expiringPosts = getExpiringPosts()
			self.processExpiringPosts(expiringPosts)
			deleteExpiredPosts()

			time.sleep(self.interval)
