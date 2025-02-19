from flask import Blueprint, jsonify
from backend.models.contact_us_inquiries import ContactUsInquiries
from backend.models.db import db

# ✅ Blueprint for handling contact inquiries
admin_routes = Blueprint("admin", __name__)

# ✅ Route: Fetch all messages
@admin_routes.route("/messages", methods=["GET"])
def get_messages():
    """
    Fetches all contact form messages
    """
    messages = ContactUsInquiries.query.order_by(ContactUsInquiries.submitted_at.desc()).all()
    return jsonify([msg.to_dict() for msg in messages])

# ✅ Route: Delete a message
@admin_routes.route("/messages/<int:message_id>", methods=["DELETE"])
def delete_message(message_id):
    """
    Deletes a contact form message
    """
    message = ContactUsInquiries.query.get(message_id)
    if not message:
        return jsonify({"error": "Message not found"}), 404

    db.session.delete(message)
    db.session.commit()

    return jsonify({"message": "Message deleted successfully"}), 200
