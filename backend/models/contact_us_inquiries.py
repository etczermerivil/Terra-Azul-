from .db import db, SCHEMA,environment
from datetime import datetime

class ContactUsInquiries(db.Model):
    __tablename__ = 'contact_us_inquiries'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    first_name = db.Column(db.String(255), nullable=False)
    last_name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    phone_number = db.Column(db.String(20), nullable=True)
    message = db.Column(db.String(500), nullable=False)
    submitted_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
            return {
                "id": self.id,
                "first_name": self.first_name,
                "last_name": self.last_name,
                "email": self.email,
                "phone_number": self.phone_number,
                "message": self.message,
                "submitted_at": self.submitted_at.strftime('%Y-%m-%d %H:%M:%S') if self.submitted_at else None
            }
