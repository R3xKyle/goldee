from flask_mail import Message
from app import mail
import credentials

def generateEmailHeader(toAddress, subject):
    msg = Message(subject, sender=credentials.email, recepients=toAddress)
    return msg

def attachMessage(msg, plaintext, html):
    msg.body(plaintext)
    msg.html(html)
    
    return msg

def sendEmailNewPost(toAddress, toName, postHeadline, postDescription, postLink):
    msg = generateEmailHeader(toAddress, "Verify Goldee Posting")

    plaintext = generatePlaintextNewPost(toName, postHeadline, postDescription, postLink)
    html = generateHTMLNewPost(toName, postHeadline, postDescription, postLink)

    msg = attachMessage(msg, plaintext, html)
    
    sendEmail(toAddress, msg)

def sendEmailNewPostReply(toAddress, toName, postHeadline, contactEmail, contactName, contactMessage):
    msg = generateEmailHeader(toAddress, "New Reply to Your Goldee Post")

    plaintext = generatePlaintextNewPostReply(toName, contactName, contactEmail, postHeadline, contactMessage)
    html = generateHTMLNewPostReply(toName, contactName, contactEmail, postHeadline, contactMessage)

    msg = attachMessage(msg, plaintext, html)

    sendEmail(msg)

def sendEmailPostExpiring(toAddress, toName, postHeadline, renewLink):
    msg = generateEmailHeader(toAddress, "Going Goldee Gone!")

    plaintext = generatePlaintextPostExpiring(toName, postHeadline, renewLink)
    html = generateHTMLPostExpiring(toName, postHeadline, renewLink)

    msg = attachMessage(msg, plaintext, html)

    sendEmail(msg)

def sendEmail(msg):
    mail.send(msg)

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
    html = "<html><head></head><body><p>Hi " + name + ",<br>Thank you for posting with Goldee. "
    html += "Here's what your post will say:<br><br>"
    html += headline + "<br>"
    html += description + "<br><br>"
    html += "If you're happy with your post, click the Post button below and it'll go live. "
    html += "All responses to your post will be forwarded to this email address.<br>"
    html += "If you're unhappy with your post, simply disregard this email and post again.<br><br>"
    html += '''<button style="width:250px; height:50px; margin: 5px 5px; border-radius: 50px; border-style: none; 
             font-size: 1em; background: #F77D6B; color: #FFFFFF;">''' + "<a href=" + link + ">Make Your Post Live</a></button><br><br><br>"
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
    plaintext += "For tips, please visit GoGoldee.com/safety. If you have any questions, "
    plaintext += "or want to leave feedback, simply reply to this email.\n"
    plaintext += "Thanks,\nGoldee\n"
    return plaintext

def generateHTMLNewPostReply(name, contactName, contactEmail, postHeadline, contactMessage):
    html = "<html><head></head><body><p>Hi " + name + ",<br><br>"
    html += contactName + " has responded to your following post: " + postHeadline + ".<br>"
    html += contactName + " says: " + contactMessage + "<br><br>"
    html += '''Reply to <button style="width:250px; height:50px; margin: 5px 5px; border-radius: 50px; border-style: none; 
             font-size: 1em; background: #F77D6B; color: #FFFFFF;">''' + "<a href='mailto:" + contactEmail + "'>" + contactName + "</a></button><br><br><br>"
    html += "Please note, once you reply to " + contactName + ", they will see your email address. "
    html += "As always, use caution when corresponding with or meeting people you don't know. "
    html += "For tips, please visit <a href='www.GoGoldee.com/safety'>GoGoldee.com/safety</a>. "
    html += "If you have any questions, or want to leave feedback, simply reply to this email.<br><br>"
    html += "Thanks,<br>Goldee<br>"
    html += "</p></body></html>"
    return html

def generatePlaintextPostExpiring(name, postHeadline, link):
	plaintext = "Hi " + name + ",\n\n"
	plaintext += "In order to ensure fresh content on Goldee, all posts are deleted after seven days. "
	plaintext += "You have just two days remaining on the following post: " + postHeadline + ".\n"
	plaintext += "If you'd like your post to stay active another week, simply visit the url below within the next "
	plaintext += "48 hours, otherwise Goldee will take care of deleting your post for you once "
	plaintext += "the time is up.\n\n"
	plaintext += "Paste this into your browser to renew: " + link + "\n"
	plaintext += "Thanks,\nGoldee\n"
	plaintext += "P.S. As always, if you have a question, comment, or feedback, please share it by replying to this email!"
	return plaintext

def generateHTMLPostExpiring(name, postHeadline, link):
    html = "<html><head></head><body><p>Hi " + name + ",<br><br>"
	html += "In order to ensure fresh content on Goldee, all posts are deleted after seven days. "
	html += "You have just two days remaining on the following post: " + postHeadline + ".<br>"
	html += "If you'd like your post to stay active another week, simply click 'repost' within the next "
	html += "48 hours, otherwise Goldee will take care of deleting your post for you once "
	html += "the time is up.<br><br>"
	html += '''<button style="width:250px; height:50px; margin: 5px 5px; border-radius: 50px; border-style: none; 
             font-size: 1em; background: #F77D6B; color: #FFFFFF;">''' + "<a href='" + link + "'>Repost</a></button><br><br><br>"
	html += "Thanks,<br>Goldee<br>"
	html += "P.S. As always, if you have a question, comment, or feedback, please share it by replying to this email!"
	return html

if __name__ == "__main__":
    main()