from flask import Blueprint, request, jsonify, current_app
from flask_mail import Mail, Message
import os
from dotenv import load_dotenv

load_dotenv()

email_routes = Blueprint('email_routes', __name__)

# Email Configuration
mail = Mail()  # Create a mail instance (initialize later)

@email_routes.route('/send-email', methods=['POST'])
def send_email():
    try:
        data = request.json
        name = data.get('name')
        email = data.get('email')

        # Use current_app to access config inside Blueprint
        msg = Message(
            "New Partner Inquiry",
            sender=current_app.config['MAIL_USERNAME'],  # Use current_app
            recipients=["businessman.merivil@gmail.com"]
        )
        msg.body = f"Name: {name}\nEmail: {email}\nMessage: Interested in partnering with us."

        mail.send(msg)

        return jsonify({"message": "Email sent successfully!"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
