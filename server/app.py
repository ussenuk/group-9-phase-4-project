#!/usr/bin/env python3

from flask import request, session
from flask_restful import Resource
from sqlalchemy.exc import IntegrityError

from config import app, db, api
from models import User, Department, Accounting, UserDepartment, Salary

@app.route('/')
def home():
    return 'Welcome to my API.' 

# Frank
class Signup(Resource):
  
    def post(self):
        json= request.get_json()
        user = User(
            username=json['username'],
            password_hash = json['password']
        )

        db.session.add(user)
        db.session.commit()
        return user.to_dict(), 201

class Login(Resource):
            
    def post(self):
        data = request.get_json()
        username = data.get("username")
        password = data.get("password")

        print(f"Received login request for username: {username}")

        # Check if both username and password are provided
        if not (username and password):
            return {"message": "Both username and password are required."}, 400

        # Query the database for the user with the provided username
        user = User.query.filter(User.username == username).first()

        # Check if the user exists and the password is correct
        if user:
            print(f"User found: {user}")
            if user.authenticate(password):
                # Store user id in session
                session['user_id'] = user.id
                print("User authenticated successfully")
                # Return user details
                return user.to_dict(), 200
            else:
                print("Authentication failed: Incorrect password")
        else:
            print("User not found")

        # Return error message if username or password is incorrect
        return {"message": "Invalid username or password."}, 401
    
class Logout(Resource):
    
    def delete(self):
        session['user_id']=None
        return {},204

class CheckSession(Resource):
    
    def get(self):
        
        user_id=session.get('user_id')
        if user_id:
            user=User.query.filter(User.id==user_id).first()
            return user.to_dict(),200
        return {}, 401
        
api.add_resource(Login, '/login', endpoint='login')
api.add_resource(Signup, '/signup', endpoint='signup')
api.add_resource(CheckSession, '/check_session', endpoint='check_session')
api.add_resource(Logout, '/logout', endpoint='logout')


if __name__ == '__main__':
    app.run(port=5555, debug=True)