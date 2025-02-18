import os
from flask import Flask, render_template, request, session, redirect
from flask_cors import CORS
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import LoginManager, current_user
from flask_session import Session
from .models import db, User
from .api.user_routes import user_routes
from .api.auth_routes import auth_routes
from .seeds import seed_commands
from .config import Config
from backend.api.admin_routes import admin_routes
from datetime import timedelta
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__, static_folder='../frontend/dist', static_url_path='/')

# Setup login manager
login = LoginManager(app)
login.login_view = None  # Disable automatic redirection on unauthorized access

@login.user_loader
def load_user(user_id):
    print(f"🔹 Loading user from session: {user_id}")
    return User.query.get(int(user_id)) if user_id else None

# Tell Flask about our seed commands
app.cli.add_command(seed_commands)

app.config.from_object(Config)

# Fix Session Issues
app.config["SESSION_TYPE"] = "filesystem"
app.config["SESSION_PERMANENT"] = True
app.config["SESSION_USE_SIGNER"] = True
app.config["SESSION_KEY_PREFIX"] = "terra_"
app.config["SESSION_PROTECTION"] = None
app.config["PERMANENT_SESSION_LIFETIME"] = timedelta(days=7)

app.config["SESSION_COOKIE_NAME"] = "terra_session"
app.config["SESSION_COOKIE_SECURE"] = False
app.config["SESSION_COOKIE_HTTPONLY"] = True
app.config["SESSION_COOKIE_SAMESITE"] = "Lax"

Session(app)

# Register blueprints
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(auth_routes, url_prefix='/api/auth')
app.register_blueprint(admin_routes, url_prefix='/api/admin')

db.init_app(app)
Migrate(app, db)

# Fix CORS to Ensure Cookies Work
CORS(app, supports_credentials=True, origins=["http://localhost:5173"],
     methods=["GET", "POST", "OPTIONS", "DELETE"],
     allow_headers=["Content-Type", "Authorization"])

@app.after_request
def inject_csrf_token(response):
    response.set_cookie(
        'csrf_token',
        generate_csrf(),
        secure=True if os.environ.get('FLASK_ENV') == 'production' else False,
        samesite='Strict' if os.environ.get('FLASK_ENV') == 'production' else "Lax",
        httponly=True)
    return response

@app.route("/api/docs")
def api_help():
    """
    Returns all API routes and their doc strings
    """
    acceptable_methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
    route_list = { rule.rule: [[ method for method in rule.methods if method in acceptable_methods ],
                    app.view_functions[rule.endpoint].__doc__ ]
                    for rule in app.url_map.iter_rules() if rule.endpoint != 'static' }
    return route_list

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    if path == 'favicon.ico':
        return app.send_from_directory('public', 'favicon.ico')
    return app.send_static_file('index.html')

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')
