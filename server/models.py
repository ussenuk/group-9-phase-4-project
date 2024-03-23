from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy_serializer import SerializerMixin

from config import db, bcrypt

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String())
    fullname = db.Column(db.String())
    age = db.Column(db.Integer)
    gender = db.Column(db.String)
    role = db.Column(db.String)


class Department(db.Model, SerializerMixin):
    __tablename__ = 'departments'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    subject = db.Column(db.String())

class Accounting(db.Model, SerializerMixin):
    __tablename__ = 'accountings'
    
    id = db.Column(db.Integer, primary_key=True)
    account_name = db.Column(db.String())
    accounting_status_perterm = db.Column(db.String())
    amount_paid = db.Column(db.Integer)
    balance = db.Column(db.Integer)

class UserDepartment(db.Model, SerializerMixin):
    __tablename__ = 'user_departments'
    
    id = db.Column(db.Integer, primary_key=True)
    