#!/usr/bin/env python3

from flask import request, session, jsonify, make_response
from flask_restful import Resource
from sqlalchemy.exc import IntegrityError

from config import app, db, api
from models import User, Department, Accounting, UserDepartment, Salary

class ClearSession(Resource):
    def delete(self):
        pass
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

class CheckSession(Resource):
    def get(self):
        if 'user_id' in session and session['user_id'] is not None:
            user_id = session['user_id']
            user = User.query.get(user_id)

            if user:
                return jsonify(user.to_dict()), 200

        return jsonify({}), 204

class Login(Resource):
    def post(self):
        username = request.get_json()['username']
        user = User.query.filter_by(username = username).first()


        password = request.get_json()['password']

        if user.authenticate(password):
            session['user_id']=user.id
            return user.to_dict(), 200
        return {'error': 'Invalid username or password'}, 401

class Logout(Resource):
    def delete(self):

        session['user_id'] = None
        return {'message': 'User successfully logout'}, 200



api.add_resource(Signup, '/signup', endpoint='signup')
api.add_resource(CheckSession, '/check_session', endpoint='check_session')
api.add_resource(Login, '/login', endpoint='login')
api.add_resource(Logout, '/logout', endpoint='logout')


if __name__ == '__main__':
    app.run(port=5555, debug=True)