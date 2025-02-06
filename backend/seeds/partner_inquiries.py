from backend.models.partner_inquiry import PartnerInquiry
from backend.models.db import db

def seed_partner_inquiries():
    # Example seed data
    inquiries = [
        PartnerInquiry(name="Alice Johnson", email="alice@example.com"),
        PartnerInquiry(name="Bob Smith", email="bob@example.com"),
    ]

    for inquiry in inquiries:
        db.session.add(inquiry)

    db.session.commit()

def undo_partner_inquiries():
    db.session.execute('TRUNCATE table partner_inquiries RESTART IDENTITY CASCADE;')
    db.session.commit()
