from backend.models.partner_inquiries import PartnerInquiries
from backend.models.db import db, environment, SCHEMA
from sqlalchemy.sql import text

def seed_partner_inquiries():
    inquiries = [
        PartnerInquiries(name="Alice Johnson", email="alice@example.com"),
        PartnerInquiries(name="Bob Smith", email="bob@example.com"),
    ]
    for inquiry in inquiries:
        db.session.add(inquiry)

    db.session.commit()

def undo_partner_inquiries():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.partner_inquiries RESTART IDENTITY CASCADE;")
    else:
        # For local dev (SQLite):
        db.session.execute(text("DELETE FROM partner_inquiries;"))
        db.session.execute(text("DELETE FROM sqlite_sequence WHERE name='partner_inquiries';"))
    db.session.commit()
