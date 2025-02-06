from .db import db, environment, SCHEMA
from datetime import datetime

class PartnerInquiries(db.Model):
    __tablename__ = 'partner_inquiries'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    submitted_at = db.Column(db.DateTime, default=datetime.utcnow)
