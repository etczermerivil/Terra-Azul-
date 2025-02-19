from flask import Blueprint, request, jsonify
from backend.models.contact_us_inquiries import ContactUsInquiries
from backend.models.db import db

contact_routes = Blueprint("contact", __name__)

@contact_routes.route("/contact", methods=["POST"])
def submit_contact():
    """
    Receives contact form data and saves it to the database.
    """
    data = request.get_json()

    if not data.get("first_name") or not data.get("email") or not data.get("message"):
        return jsonify({"error": "Missing required fields"}), 400

    new_message = ContactUsInquiries(
        first_name=data["first_name"],
        last_name=data["last_name"],
        email=data["email"],
        phone_number=data.get("phone_number"),  # Optional
        message=data["message"]
    )

    db.session.add(new_message)
    db.session.commit()

    return jsonify({"message": "Message submitted successfully!"}), 201
