from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from backend.models.contact_us_inquiries import ContactUsInquiries
from backend.models.db import db

# ✅ Make sure the Blueprint is correctly named `admin_routes`
admin_routes = Blueprint("admin", __name__)

# ✅ Route: Fetch all messages (Admin Only)
@admin_routes.route("/messages", methods=["GET"])
@login_required
def get_messages():
    """
    Fetches all contact form messages (Admin Only)
    """
    if not current_user.is_admin:  # ✅ Check if the user is an admin
        return jsonify({"error": "Forbidden: Admin access required"}), 403

    messages = ContactUsInquiries.query.order_by(ContactUsInquiries.submitted_at.desc()).all()
    return jsonify([msg.to_dict() for msg in messages])

# ✅ Route: Delete a message (Optional)
@admin_routes.route("/messages/<int:message_id>", methods=["DELETE"])
@login_required
def delete_message(message_id):
    """
    Deletes a contact form message (Admin Only)
    """
    if not current_user.is_admin:  # ✅ Restrict deletion to admins
        return jsonify({"error": "Forbidden: Admin access required"}), 403

    message = ContactUsInquiries.query.get(message_id)
    if not message:
        return jsonify({"error": "Message not found"}), 404

    db.session.delete(message)
    db.session.commit()

    return jsonify({"message": "Message deleted successfully"}), 200
