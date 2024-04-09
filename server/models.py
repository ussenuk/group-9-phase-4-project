from flask_sqlalchemy import SQLAlchemy

from sqlalchemy.ext.associationproxy import association_proxy

from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates

from config import db, bcrypt

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    fullname = db.Column(db.String(255))
    username = db.Column(db.String(80), nullable=False)
    age = db.Column(db.Integer)
    gender = db.Column(db.String(50))
    bio = db.Column(db.String(255))
    image_url = db.Column(db.String(255))
    role = db.Column(db.String(50)) # student, teacher, admin

    _password_hash = db.Column(db.String)
    
    # Relationship with Accounting table (one-to-one)
    accountings = db.relationship("Accounting", back_populates="user")

    # Relationship with UserDepartment table (many-to-many)
    user_departments = db.relationship('UserDepartment', back_populates='user', cascade='all, delete-orphan')

    departments = association_proxy('user_departments', 'department', creator=lambda dp:UserDepartment(department=dp))

    # add serialization rules
    serialize_rules = ('-user_departments.user',)


    def __repr__(self):
        return f"<User {self.fullname}>"
    
    @property
    def password_hash(self):
        """Getter method for password hash (read-only)"""
        raise AttributeError('password hash is write-only')
    
    @hybrid_property
    def password_hash(self):
        return self._password_hash
    
    @password_hash.setter
    def password_hash(self, password):
        """Password setter - enforces hashing and prevents direct assignment"""
        if password:
            password_hash = bcrypt.generate_password_hash(
                password.encode('utf-8'))
            self._password_hash = password_hash.decode('utf-8')
        else:
            raise ValueError('Password cannot be empty')
    
    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8'))

    @validates('username')
    def validate_username(self, key, username):
        if not username:
            raise ValueError("All Users should have a username")
        
        if db.session.query(User).filter(User.username == username).first():
            raise ValueError('No two users have the same username')
        
        return username


class Department(db.Model, SerializerMixin):
    __tablename__ = 'departments'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    subject = db.Column(db.String(255)) # Optional field for department subject

    # Relationship with UserDepartment table (many-to-many)
    user_departments = db.relationship('UserDepartment', back_populates='department', cascade='all, delete-orphan')

    users = association_proxy('user_departments', 'user', creator=lambda usr:UserDepartment(user=usr))

    # add serialization rules
    serialize_rules = ('-user_departments.department',)

    def __repr__(self):
        return f"<Department {self.name}>"

class Accounting(db.Model, SerializerMixin):
    __tablename__ = 'accountings'
    
    id = db.Column(db.Integer, primary_key=True)
    account_name = db.Column(db.String(255))
    accounting_status_perterm = db.Column(db.String(50)) # paid, pending, overdue
    amount_paid = db.Column(db.Integer)
    balance = db.Column(db.Integer)

    # add the foreign key
    student_id = db.Column(db.Integer, db.ForeignKey("users.id", ondelete='CASCADE'))

    # Relationship with User table (one-to-one)
    user = db.relationship("User", back_populates="accountings")

    def __repr__(self):
        return f"<Accounting {self.account_name}>"
    

class Salary(db.Model, SerializerMixin):
    __tablename__ = 'salaries'

    id = db.Column(db.Integer, primary_key=True)
    amount_usd = db.Column(db.Numeric(10,2)) # Assuming salary amounts will have two decimal places
    pay_date = db.Column(db.Date) # The date the salary was paid
    description = db.Column(db.String(255)) # Optional: For bonuses, adjustments,etc.

    user_id = db.Column(db.Integer, db.ForeignKey('users.id')) # Foreign key to users table

    # Relationship with User table (many-to-one)
    user = db.relationship('User', backref=db.backref('salaries', lazy=True))

    def __repr__(self):
        return f"<Salary user_id = {self.user_id} amount={self.amount}>"
        

class UserDepartment(db.Model, SerializerMixin):
    __tablename__ = 'user_departments'
    
    id = db.Column(db.Integer, primary_key=True)

    # add the foreign key
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    department_id = db.Column(db.Integer, db.ForeignKey('departments.id'))

    # add relationships
    user = db.relationship('User', back_populates='user_departments')
    department = db.relationship('Department', back_populates='user_departments')

    # add serialization
    serialize_rules = ('-user.user_departments','-department.user_departments')
    
class Job(db.Model, SerializerMixin):
    __tablename__ = 'jobs'
    
    id = db.Column(db.Integer, primary_key=True)
    title=db.Column(db.String)
    level = db.Column(db.String)
    description = db.Column(db.String)
    requirements = db.Column(db.String)

class Registration(db.Model, SerializerMixin):
    __tablename__ = 'registrations'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    father_fname = db.Column(db.String)
    father_lname = db.Column(db.String)
    mother_fname = db.Column(db.String)
    mother_lname = db.Column(db.String)
    adress = db.Column(db.String)
    grade = db.Column(db.String)
