#!/usr/bin/env python3

from flask import Flask, jsonify, request, session
from flask_restful import Resource, Api
from sqlalchemy.exc import IntegrityError

from config import app, db, api
from models import User, Department, Accounting, UserDepartment, Salary
import requests

app = Flask(__name__)
api = Api(app)

server_url = 'http://localhost:5555'

# Frank
class Signup(Resource):
    pass

class CheckSession(Resource):
    pass

class Login(Resource):
    pass

class Logout(Resource):
    pass


# Report View Route
class ReportView(Resource):
    def get(self):
        # For demonstration, returning a dummy report data as JSON
        report_data = {
            "report_id": 1,
            "report_name": "Sample Report",
            "report_content": "This is a sample report content."
        }
        return jsonify(report_data)

# FAQ View (CRUD) Routes
class FAQView(Resource):
    def get(self):
        # For demonstration, returning dummy FAQ items as JSON
        faqs = [
            {"id": 1, "question": "What is FAQ?", "answer": "FAQ stands for Frequently Asked Questions."},
            {"id": 2, "question": "How to create a new FAQ?", "answer": "You can create a new FAQ by sending a POST request to the /faqs endpoint."},
            # Add more FAQ items as needed
        ]
        return jsonify(faqs)

    def post(self):
        return jsonify({"message": "Creating new FAQ..."})

    def put(self, faq_id):
        return jsonify({"message": "Updating FAQ..."})

    def delete(self, faq_id):
        return jsonify({"message": "Deleting FAQ..."})


api.add_resource(Signup, '/signup', endpoint='signup')
api.add_resource(CheckSession, '/check_session', endpoint='check_session')
api.add_resource(Login, '/login', endpoint='login')
api.add_resource(Logout, '/logout', endpoint='logout')
api.add_resource(ReportView, '/reports', endpoint='reports')
api.add_resource(FAQView, '/faqs', endpoint='faqs')

# Define function to test views
def test_views():
    report_response = requests.get(f'{server_url}/reports')
    print("Report View Response:")
    print(report_response.json())

    faq_response = requests.get(f'{server_url}/faqs')
    print("\nFAQ View Response:")
    print(faq_response.json())


if __name__ == '__main__':
    app.run(port=5555, debug=True)
    
    test_views()