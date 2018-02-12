import smtplib
import credentials

from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

def sendEmailNewPost(toAddress, toName, postHeadline, postDescription, postLink):
	msg = MIMEMultipart('alternative')
	msg['From'] = credentials.email
	msg['To'] = toAddress
	msg['Subject'] = "Verify Goldee Posting"

	plaintext = generatePlaintextNewPost(toName, postHeadline, postDescription, postLink)
	html = generateHTMLNewPost(toName, postHeadline, postDescription, postLink)

	plaintextPart = MIMEText(plaintext, 'text')
	htmlPart = MIMEText(html, 'html')

	msg.attach(plaintextPart)
	msg.attach(htmlPart)

	sendEmail(toAddress, msg)

def sendEmailNewPostReply(toAddress, toName, postHeadline, contactEmail, contactName, contactMessage):
	msg = MIMEMultipart('alternative')
	msg['From'] = credentials.email
	msg['To'] = toAddress
	msg['Subject'] = "New Reply to Your Goldee Post"

	plaintext = generatePlaintextNewPostReply(toName, contactName, contactEmail, postHeadline, contactMessage)
	html = generateHTMLNewPostReply(toName, contactName, contactEmail, postHeadline, contactMessage)

	plaintextPart = MIMEText(plaintext, 'text')
	htmlPart = MIMEText(html, 'html')

	msg.attach(plaintextPart)
	msg.attach(htmlPart)

	sendEmail(toAddress, msg)


def sendEmail(toAddress, msg):
	server = smtplib.SMTP('smtp.gmail.com:587')
	server.ehlo()

	server.starttls()
	server.ehlo()
	server.login(credentials.email, credentials.password)
	text = msg.as_string()
	server.sendmail(credentials.email, toAddress, text)
	server.quit()

def generatePlaintextNewPost(name, headline, description, link):
	plaintext = "Hi " + name + ",\n\n"
	plaintext += "Thank you for posting with Goldee. Here's what your post will say:\n\n"
	plaintext += headline + "\n"
	plaintext += description + "\n\n"
	plaintext += "If you're happy with your post, enter the following post link into your browser and it'll go live. "
	plaintext += "All responses to your post will be forwarded to this email address.\n"
	plaintext += "If you're unhappy with your post, simply disregard this email and post again.\n\n"
	plaintext += "Post link: " + link + "\n\n\n"
	plaintext += "If you ever have any questions or feedback for Goldee, simply reply to this email.\n\n"
	plaintext += "Thanks,\nGoldee\n"
	return plaintext



def generateHTMLNewPost(name, headline, description, link):
	html = "<html><head></head><body><p>Hi " + name + ",<br>Thank you for posting with Goldee. Here's what your post will say:<br><br>"
	html += headline + "<br>"
	html += description + "<br><br>"
	html += "If you're happy with your post, click the Post link below and it'll go live. "
	html += "All responses to your post will be forwarded to this email address.<br>"
	html += "If you're unhappy with your post, simply disregard this email and post again.<br><br>"
	html += "<a href=" + link + ">Make Your Post Live</a><br><br><br>"
	html += "If you ever have any questions or feedback for Goldee, simply reply to this email.<br><br>"
	html += "Thanks,<br>Goldee<br>"
	html += "</p></body></html>"
	return html

def generatePlaintextNewPostReply(name, contactName, contactEmail, postHeadline, contactMessage):
	plaintext = "Hi " + name + ",\n\n"
	plaintext += contactName + " has responded to your following post: " + postHeadline + ".\n"
	plaintext += contactName + " says: " + contactMessage + "\n\n"
	plaintext += "Reply to " + contactEmail + "\n\n"
	plaintext += "Please note, once you reply to " + contactName + ", they will see your email address. "
	plaintext += "As always, use caution when corresponding with or meeting people you don't know. "
	plaintext += "For tips, please visit GoGoldee.com/safety. If you have any questions, or want to leave feedback, simply reply to this email.\n"
	plaintext += "Thanks,\nGoldee\n"
	return plaintext

def generateHTMLNewPostReply(name, contactName, contactEmail, postHeadline, contactMessage):
	html = "<html><head></head><body><p>Hi " + name + ",<br><br>"
	html += contactName + " has responded to your following post: " + postHeadline + ".<br>"
	html += contactName + " says: " + contactMessage + "<br><br>"
	html += "Reply to <a href='mailto:" + contactEmail + "'>" + contactName + "</a><br><br>"
	html += "Please note, once you reply to " + contactName + ", they will see your email address. "
	html += "As always, use caution when corresponding with or meeting people you don't know. "
	html += "For tips, please visit <a href='www.GoGoldee.com/safety'>GoGoldee.com/safety</a>. If you have any questions, or want to leave feedback, simply reply to this email.<br><br>"
	html += "Thanks,<br>Goldee<br>"
	html += "</p></body></html>"
	return html

if __name__ == "__main__":
	main()