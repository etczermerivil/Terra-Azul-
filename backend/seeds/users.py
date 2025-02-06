from backend.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text
from werkzeug.security import generate_password_hash  # Ensure passwords are hashed

# Adds demo users, checking if they already exist before inserting
def seed_users():
    existing_demo = User.query.filter_by(username="Demo").first()
    existing_marnie = User.query.filter_by(username="marnie").first()
    existing_bobbie = User.query.filter_by(username="bobbie").first()

    if not existing_demo:
        demo = User(
            username='Demo',
            email='demo@aa.io',
            password=generate_password_hash('password')  # Hash password
        )
        db.session.add(demo)

    if not existing_marnie:
        marnie = User(
            username='marnie',
            email='marnie@aa.io',
            password=generate_password_hash('password')  # Hash password
        )
        db.session.add(marnie)

    if not existing_bobbie:
        bobbie = User(
            username='bobbie',
            email='bobbie@aa.io',
            password=generate_password_hash('password')  # Hash password
        )
        db.session.add(bobbie)

    db.session.commit()


# Deletes all users and resets primary keys for SQLite/PostgreSQL
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users;"))
        db.session.execute(text("DELETE FROM sqlite_sequence WHERE name='users';"))  # Reset SQLite PK sequence

    db.session.commit()
