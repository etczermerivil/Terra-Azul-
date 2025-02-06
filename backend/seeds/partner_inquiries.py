from backend.models.partner_inquiries import PartnerInquiries
from backend.models.db import db

def seed_partner_inquiries():
    # Example seed data
    inquiries = [
        PartnerInquiries(name="Alice Johnson", email="alice@example.com"),
        PartnerInquiries(name="Bob Smith", email="bob@example.com"),
    ]

    for inquiry in inquiries:
        db.session.add(inquiry)

    db.session.commit()

def undo_partner_inquiries():
    db.session.execute('TRUNCATE table partner_inquiries RESTART IDENTITY CASCADE;')
    db.session.commit()
