#!/usr/bin/env python3

from flask import request, session, jsonify
from flask_cors import CORS
from flask_restful import Resource
from sqlalchemy.exc import IntegrityError

from config import app, db, api
from models import User, Department, Accounting, UserDepartment, Salary

CORS(app)


# Frank
class Signup(Resource):
    pass


class CheckSession(Resource):
    pass


class Login(Resource):
    pass


class Logout(Resource):
    pass


# Mohammed


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


api.add_resource(Signup, "/signup", endpoint="signup")
api.add_resource(CheckSession, "/check_session", endpoint="check_session")
api.add_resource(Login, "/login", endpoint="login")
api.add_resource(Logout, "/logout", endpoint="logout")
api.add_resource(Accounts, "/accounts/<int:student_id>", endpoint="accounts")
api.add_resource(AccountingReport, "/accounting_report", endpoint="accounting_report")
api.add_resource(Salaries, "/salaries", endpoint="salaries")
api.add_resource(Departments, "/departments/<int:department_id>", endpoint="department")


if __name__ == "__main__":
    app.run(port=5555, debug=True)
