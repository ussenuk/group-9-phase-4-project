#!/usr/bin/env python3

from flask import request, session, jsonify
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
    
# class Logout(Resource):
    
#     def delete(self):
#         session['user_id']=None
#         return {},204

class CheckSession(Resource):
    
    def get(self):
        
        user_id=session.get('user_id')
        if user_id:
            user=User.query.filter(User.id==user_id).first()
            return user.to_dict(),200
        return {}, 401


class Accounts(Resource):
    def get(self, student_id):
        accounting = Accounting.query.filter_by(student_id=student_id).first()
        if accounting:
            return {
                "name": accounting.account_name,
                "fee_status": accounting.accounting_status_perterm,
                "paid": accounting.amount_paid,
                "balance": accounting.balance,
            }, 200
        else:
            return {"error": "Student not found"}, 404

class AccountingReport(Resource):
    def get(self):

        if session.get("user_id") == 20:

            accounting_records = Accounting.query.all()

            accounting_report = []
            for record in accounting_records:
                accounting_report.append(
                    {
                        "student_id": record.student_id,
                        "name": record.account_name,
                        "fee_status": record.accounting_status_perterm,
                        "paid": record.amount_paid,
                        "balance": record.balance,
                    }
                )

            return jsonify(accounting_report), 200
        else:
            return {"error": "Unauthorized access"}, 403


class Salaries(Resource):
    def get(self):
        salary_list = []
        for salary in Salary.query.all():
            user = User.query.filter_by(id=salary.user_id, role="teacher").first()
            if user:
                salary_list.append(
                    {
                        "teacher_id": user.id,
                        "teacher_name": user.fullname,
                        "salary": salary.amount_usd,
                        "pay_date": salary.pay_date.strftime("%Y-%m-%d"),
                        "description": salary.description,
                    }
                )
        return jsonify(salary_list)


class Departments(Resource):
    def get(self, department_id):
        user_department = UserDepartment.query.filter_by(
            department_id=department_id
        ).first()
        if user_department:
            department = Department.query.filter_by(
                id=user_department.department_id
            ).first()
            if department:
                return {
                    "dept_name": department.name,
                    "program": department.subject,
                }, 200
            else:
                return {"error": "Department not found"}, 404
        else:
            return {"error": "UserDepartment not found"}, 404


api.add_resource(Login, '/login', endpoint='login')
api.add_resource(Signup, '/signup', endpoint='signup')
api.add_resource(CheckSession, '/check_session', endpoint='check_session')
api.add_resource(Accounts, "/accounts/<int:student_id>", endpoint="accounts")
api.add_resource(AccountingReport, "/accounting_report", endpoint="accounting_report")
api.add_resource(Salaries, "/salaries", endpoint="salaries")
api.add_resource(Departments, "/departments/<int:department_id>", endpoint="department")

# api.add_resource(Logout, '/logout', endpoint='logout')


if __name__ == '__main__':
    app.run(port=5555, debug=True)
