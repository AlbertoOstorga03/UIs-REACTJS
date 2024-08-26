from config import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(200))
    passport_copy = db.Column(db.String(200))
    drivers_license_copy = db.Column(db.String(200))
    selfie_with_id = db.Column(db.String(200))

    def set_password(self, password):
        self.password = password

    def check_password(self, password):
        return self.password == password
