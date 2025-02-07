import os
import requests
from flask import Blueprint, request, jsonify

email_routes = Blueprint("email_routes", __name__)

SENDGRID_API_KEY = os.getenv("SENDGRID_API_KEY")
SENDGRID_URL = "https://api.sendgrid.com/v3/mail/send"

@email_routes.route("/send-email", methods=["POST"])
def send_email():
    data = request.json
    name = data.get("name")
    email = data.get("email")

    # Prepare email content
    subject = "New Partner Inquiry"
    content = f"Name: {name}\nEmail: {email}\nMessage: Interested in partnering with us."

    headers = {
        "Authorization": f"Bearer {SENDGRID_API_KEY}",
        "Content-Type": "application/json"
    }

    email_data = {
        "personalizations": [{"to": [{"email": "water@terraazultech.com"}]}],
        "from": {"email": "water@terraazultech.com"},
        "subject": subject,
        "content": [{"type": "text/plain", "value": content}]
    }

    # Send email request to SendGrid
    response = requests.post(SENDGRID_URL, headers=headers, json=email_data)

    if response.status_code == 202:
        return jsonify({"message": "Email sent successfully!"}), 200
    else:
        return jsonify({"error": "Failed to send email", "details": response.text}), 400
