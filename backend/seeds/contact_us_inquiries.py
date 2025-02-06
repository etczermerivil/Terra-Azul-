from backend.models.contact_us_inquiries import ContactUsInquiries
from backend.models.db import db, environment, SCHEMA
from sqlalchemy.sql import text

def seed_contact_us_inquiries():
    # Example seed data
    inquiries = [
        ContactUsInquiries(
            first_name="Jane",
            last_name="Doe",
            email="jane@example.com",
            phone_number="123-456-7890",
            message="I am interested in partnering with Terra Azul Tech."
        ),
        ContactUsInquiries(
            first_name="John",
            last_name="Smith",
            email="john@example.com",
            phone_number="987-654-3210",
            message="Can you provide more details about your services?"
        ),
    ]

    for inquiries in inquiries:
        db.session.add(inquiries)

    db.session.commit()

def undo_contact_us_inquiries():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.contact_us_inquiries RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM contact_us_inquiries"))
        db.session.execute(text("DELETE FROM sqlite_sequence WHERE name='contact_us_inquiries';"))
    db.session.commit()
