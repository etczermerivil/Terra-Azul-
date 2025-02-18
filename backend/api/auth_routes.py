from flask import Blueprint, request, jsonify, session
from backend.models import User, db
from backend.forms import LoginForm, SignUpForm
from backend.models.contact_us_inquiries import ContactUsInquiries
from flask_login import current_user, login_user, logout_user, login_required, confirm_login

auth_routes = Blueprint('auth', __name__)


@auth_routes.route('/')
def authenticate():
    """
    Authenticates a user.
    """
    if current_user.is_authenticated:
        return current_user.to_dict()
    return {'errors': {'message': 'Unauthorized'}}, 401


@auth_routes.route('/admin/messages', methods=['GET'])
# @login_required
def get_messages():
    """
    Fetches all contact form messages (Admin Only)
    """
    if not current_user.is_admin:
        return {'errors': {'message': 'Forbidden: Admin access required'}}, 403

    messages = ContactUsInquiries.query.order_by(ContactUsInquiries.submitted_at.desc()).all()

    return {
        "messages": [
            {
                "id": msg.id,
                "name": f"{msg.first_name} {msg.last_name}",
                "email": msg.email,
                "phone": msg.phone_number,
                "message": msg.message,
                "submitted_at": msg.submitted_at.strftime("%Y-%m-%d %H:%M:%S"),
            }
            for msg in messages
        ]
    }


@auth_routes.route("/login", methods=["POST"])
def login():
    """
    Logs a user in
    """
    data = request.json
    email = data.get("email")
    password = data.get("password")

    user = User.query.filter_by(email=email).first()
    if not user or not user.check_password(password):
        print("❌ Invalid credentials")
        return jsonify({"error": "Invalid credentials"}), 401

    login_user(user, remember=True)  # ✅ Ensures session persists
    confirm_login()  # ✅ Marks session as fresh

    # Manually set user ID in session (backup for Flask-Login)
    session["user_id"] = str(user.id)
    session.modified = True

    print(f"✅ User {user.id} logged in successfully!")
    print(f"✅ Session after login: {session}")

    return jsonify({"message": "Login successful", "user": user.to_dict()})


@auth_routes.route('/logout')
def logout():
    """
    Logs a user out
    """
    logout_user()
    session.pop("user_id", None)  # ✅ Remove user_id from session
    session.modified = True  # ✅ Ensure session updates

    print("✅ User logged out")
    print(f"✅ Session after logout: {session}")

    return {'message': 'User logged out'}


@auth_routes.route('/signup', methods=['POST'])
def sign_up():
    """
    Creates a new user and logs them in
    """
    form = SignUpForm()
    form['csrf_token'].data = request.cookies.get('csrf_token')

    if form.validate_on_submit():
        user = User(
            username=form.data['username'],
            email=form.data['email'],
            password=form.data['password']
        )
        db.session.add(user)
        db.session.commit()

        login_user(user, remember=True)
        confirm_login()

        session["user_id"] = str(user.id)
        session.modified = True

        print(f"✅ New user {user.id} signed up and logged in!")
        print(f"✅ Session after signup: {session}")

        return user.to_dict()

    print("❌ Signup validation failed", form.errors)
    return form.errors, 401


@auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': {'message': 'Unauthorized'}}, 401
