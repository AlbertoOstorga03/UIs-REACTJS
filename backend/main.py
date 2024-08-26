from flask import Flask, request, jsonify
from config import app, db
from models import User
import os
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = 'uploads/'

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/register', methods=['POST'])
def register():
    data = request.form
    username = data.get('name')
    email = data.get('email')
    address = data.get('address')
    password = data.get('password')

    # Files management
    passport_copy = request.files.get('passportCopy')
    drivers_license_copy = request.files.get('driversLicenseCopy')
    selfie_with_id = request.files.get('selfieWithPassportOrDriversLicenseCopy')

    # Save files
    if passport_copy:
        passport_filename = secure_filename(passport_copy.filename)
        passport_copy.save(os.path.join(app.config['UPLOAD_FOLDER'], passport_filename))
    else:
        passport_filename = None

    if drivers_license_copy:
        drivers_license_filename = secure_filename(drivers_license_copy.filename)
        drivers_license_copy.save(os.path.join(app.config['UPLOAD_FOLDER'], drivers_license_filename))
    else:
        drivers_license_filename = None

    if selfie_with_id:
        selfie_filename = secure_filename(selfie_with_id.filename)
        selfie_with_id.save(os.path.join(app.config['UPLOAD_FOLDER'], selfie_filename))
    else:
        selfie_filename = None

    # Creat new user
    new_user = User(
        username=username,
        email=email,
        address=address,
        password=password,
        passport_copy=passport_filename,
        drivers_license_copy=drivers_license_filename,
        selfie_with_id=selfie_filename
    )

    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User registered successfully"}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()

    if user and user.check_password(password):
        return jsonify({"message": "Login successful"}), 200
    else:
        return jsonify({"message": "Invalid credentials"}), 401

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    
    app.run(debug=True)
