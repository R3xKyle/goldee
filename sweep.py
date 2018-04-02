from database import getExpiringPosts, deleteExpiredPosts
from goldeeEmail import sendEmailPostExpiring
import threading
import time

# Sweeps the database every 24 hours
class DatabaseSweep():
	def __init__(self, interval = 60 * 60 * 24):
		self.interval = interval
		thread = threading.Thread(target=self.run, args=())
		thread.daemon = True
		thread.start()
	
	# Send lines to emails of all expiring posts
	def processExpiringPosts(self, expiringPosts):
		for post in expiringPosts:
			renewLink = "www.gogoldee.com/post/" + post.PostID + "/renew"
			sendEmailPostExpiring(post.Email, post.AuthorName, post.Title, renewLink)


	# The function that will run every 24 hours and sweeps the database for all necessary actions
	def run(self):
		while True:
			expiringPosts = getExpiringPosts()
			self.processExpiringPosts(expiringPosts)
			deleteExpiredPosts()

			time.sleep(self.interval)
