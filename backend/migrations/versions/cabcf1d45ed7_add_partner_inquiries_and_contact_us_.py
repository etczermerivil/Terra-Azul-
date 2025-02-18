"""Add partner_inquiries, contact_us_inquiries, and users tables

Revision ID: cabcf1d45ed7
Revises:
Create Date: 2025-01-31 17:18:07.516549

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'cabcf1d45ed7'
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    # Create the custom schema if it doesn't already exist
    op.execute("CREATE SCHEMA IF NOT EXISTS terra_azul_tech")

    # Create partner_inquiries table in the terra_azul_tech schema
    op.create_table(
        'partner_inquiries',
        sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
        sa.Column('name', sa.String(length=255), nullable=False),
        sa.Column('email', sa.String(length=255), nullable=False),
        sa.Column('submitted_at', sa.DateTime(), nullable=True),
        sa.PrimaryKeyConstraint('id'),
        schema='terra_azul_tech'
    )

    # Create contact_us_inquiries table in the terra_azul_tech schema
    op.create_table(
        'contact_us_inquiries',
        sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
        sa.Column('first_name', sa.String(length=255), nullable=False),
        sa.Column('last_name', sa.String(length=255), nullable=False),
        sa.Column('email', sa.String(length=255), nullable=False),
        sa.Column('phone_number', sa.String(length=20), nullable=True),
        sa.Column('message', sa.String(length=500), nullable=False),
        sa.Column('submitted_at', sa.DateTime(), nullable=True),
        sa.PrimaryKeyConstraint('id'),
        schema='terra_azul_tech'
    )

    # Create users table in the terra_azul_tech schema
    op.create_table(
        'users',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('username', sa.String(length=40), nullable=False),
        sa.Column('email', sa.String(length=255), nullable=False),
        sa.Column('hashed_password', sa.String(length=255), nullable=False),
        sa.PrimaryKeyConstraint('id'),
        sa.UniqueConstraint('email'),
        sa.UniqueConstraint('username'),
        schema='terra_azul_tech'
    )


def downgrade() -> None:
    # Drop tables in reverse order
    op.drop_table('users', schema='terra_azul_tech')
    op.drop_table('contact_us_inquiries', schema='terra_azul_tech')
    op.drop_table('partner_inquiries', schema='terra_azul_tech')
    op.execute("DROP SCHEMA IF EXISTS terra_azul_tech CASCADE")
