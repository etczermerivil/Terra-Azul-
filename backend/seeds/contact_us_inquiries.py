from backend.models.contact_us_inquiry import ContactUsInquiry
from backend.models.db import db, environment, SCHEMA
from sqlalchemy.sql import text

def seed_contact_us_inquiries():
    # Example seed data
    inquiries = [
        ContactUsInquiry(
            first_name="Jane",
            last_name="Doe",
            email="jane@example.com",
            phone_number="123-456-7890",
            message="I am interested in partnering with Terra Azul Tech."
        ),
        ContactUsInquiry(
            first_name="John",
            last_name="Smith",
            email="john@example.com",
            phone_number="987-654-3210",
            message="Can you provide more details about your services?"
        ),
    ]

    for inquiry in inquiries:
        db.session.add(inquiry)

    db.session.commit()

def undo_contact_us_inquiries():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.contact_us_inquiries RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text(f"DELETE FROM {SCHEMA}.contact_us_inquiries"))  # Added schema prefix

    db.session.commit()
