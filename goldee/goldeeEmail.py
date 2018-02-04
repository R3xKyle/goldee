import smtplib
import credentials

from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText


def main():

	fromaddress = credentials.email
	toaddress = ""

	msg = MIMEMultipart()
	msg['From'] = fromaddress
	msg['To'] = toaddress
	msg['Subject'] = "Test Email"

	body = "Hello this is a test for a test email" 

	msg.attach(MIMEText(body, 'plain'))

	server = smtplib.SMTP('smtp.gmail.com:587')
	server.ehlo()

	server.starttls()
	server.ehlo()
	server.login(fromaddress, credentials.password)
	text = msg.as_string()
	server.sendmail(fromaddress, toaddress, text)
	server.quit()

if __name__ == "__main__":
	main()