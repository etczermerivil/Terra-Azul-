from flask.cli import AppGroup
from .users import seed_users, undo_users
from .partner_inquiries import seed_partner_inquiries, undo_partner_inquiries
from .contact_us_inquiries import seed_contact_us_inquiries, undo_contact_us_inquiries

from backend.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Undo existing data before seeding in production
        undo_users()
        undo_partner_inquiries()
        undo_contact_us_inquiries()

    # Seed tables
    seed_users()
    seed_partner_inquiries()
    seed_contact_us_inquiries()

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    """Delete all records and reset primary keys in SQLite"""

    # Delete data from each table
    db.session.execute('DELETE FROM contact_us_inquiries;')
    db.session.execute('DELETE FROM partner_inquiries;')
    db.session.execute('DELETE FROM users;')

    # Reset primary key counters (Only needed for SQLite)
    db.session.execute("DELETE FROM sqlite_sequence WHERE name='contact_us_inquiries';")
    db.session.execute("DELETE FROM sqlite_sequence WHERE name='partner_inquiries';")
    db.session.execute("DELETE FROM sqlite_sequence WHERE name='users';")

    db.session.commit()
