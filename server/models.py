from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy_serializer import SerializerMixin

from config import db, bcrypt

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    pass

class Department(db.Model, SerializerMixin):
    __tablename__ = 'departments'
    
    pass

class Accounting(db.Model, SerializerMixin):
    __tablename__ = 'accountings'
    
    pass

class UserDepartment(db.Model, SerializerMixin):
    __tablename__ = 'user_departments'
    
    pass