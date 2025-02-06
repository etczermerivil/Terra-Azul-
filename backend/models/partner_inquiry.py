from .db import db
from datetime import datetime

class PartnerInquiry(db.Model):
    __tablename__ = 'partner_inquiries'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    submitted_at = db.Column(db.DateTime, default=datetime.utcnow)
