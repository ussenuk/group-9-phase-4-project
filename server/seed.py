#!/usr/bin/env python3

from random import randint, choice as rc, random, sample,uniform

from faker import Faker

from app import app
from models import db, User, Department, Accounting, UserDepartment, Salary, Job

fake = Faker()

with app.app_context():
    print("Deleting all records...")
    User.query.delete()
    Department.query.delete()
    Accounting.query.delete()
    UserDepartment.query.delete()
    Job.query.delete()

    fake = Faker()

    print("Creating users...")

    # make sure users have unique usernames
    # User roles with a more realistic distribution
    user_roles = [('student', 80), ('teacher', 15), ('admin', 5)]
    users = []
    fullnames = []
    usernames = []

    for role, percentage in user_roles:
        num_users = int(percentage * 20 / 100)  # Calculate number of users per role
        for i in range(num_users):
            fullname = fake.name()
            while fullname in fullnames:
                fullname = fake.name()
            fullnames.append(fullname)

            username = fake.first_name()
            while username in usernames:
                username = fake.first_name()
            usernames.append(username)

            # Generate age based on user role
            if role == 'student':
                age = randint(5, 17)  # Age range for students (5-17)
            else:
                age = randint(18, 65)  # for teachers and admins

            user = User(
                fullname=fullname,
                username=username,
                age=age,
                gender=fake.random_element(elements=('Male', 'Female')),
                bio=fake.paragraph(nb_sentences=3),
                image_url=fake.url(),
                role=role
                # email=fake.email()  # Add email address
            )

            user.password_hash = user.username + 'password'
            users.append(user)

    db.session.add_all(users)
    db.session.commit()  # Commit users before creating relationships # Commit users before creating relationships

    print("Creating Departments...")

    departments = []
    departments_name = ['kindergarden', 'primary', 'science', 'business', 'art']
    for name in departments_name:
        department = Department(
            name=name,
            subject=fake.paragraph(nb_sentences=1)
        )
        departments.append(department)

    db.session.add_all(departments)
    db.session.commit()  # Commit departments before creating relationships

    print("Creating Accounting...")

    accountings = []
    for user in users:  # Link accounting to user
        if user.role == 'student':
            accounting = Accounting(
                student_id=user.id,  # Foreign key to Users table
                account_name=user.fullname,
                accounting_status_perterm=rc(['paid', 'pending', 'overdue']),
                amount_paid=randint(1000, 5000),
                balance=randint(0, 1000)
            )
            accountings.append(accounting)

    db.session.add_all(accountings)
    db.session.commit()

    print("Creating UserDepartment relationships...")

    for user in users:
        if user.role == 'student':
            # Assign students to relevant departments based on their age
            # (replace with your specific logic for department assignment)
            if user.age < 12:
                departments_to_assign = [department for department in departments if department.name in ['kindergarden', 'primary']]
            else:
                departments_to_assign = departments  # Assign to all departments for simplicity

            # Randomly select a subset of departments for the student (maximum 2)
            assigned_departments = sample(departments_to_assign, min(2, len(departments_to_assign)))
            for department in assigned_departments:
                association = UserDepartment(user_id=user.id, department_id=department.id)
                db.session.add(association)
        elif user.role == 'teacher':
            # Assign teachers to relevant departments based on their subject expertise (replace with your logic)
            # You can access user.bio to analyze keywords or use a separate field for subject

            # (For simplicity, assign all teachers to a random department)
            department = rc(departments)
            association = UserDepartment(user_id=user.id, department_id=department.id)
            db.session.add(association)

    db.session.commit()

    print("Creating Salaries...")

    salaries = []
    for user in users:
        if user.role == 'teacher':
            # Generate a random number of salary records for each teacher
            for _ in range(randint(1,3)): # assuming 1 to 3 salary records per teacher for demonstration
                salary = Salary(
                    user_id=user.id,
                    amount_usd=round(uniform(150.00, 300.00), 2), # Random salary amount between 150 and 300
                    pay_date=fake.date_between(start_date="-1y", end_date="today"), # Random date in the last 1 years
                    description=fake.sentence(nb_words=6) # A simple description 

                )
                salaries.append(salary)

    db.session.add_all(salaries)
    db.session.commit()
    
    print("Creating Jobs...")
    
    job_details = [
    {
        "id": 1,
        "title": "Math Teacher",
        "level": "High School",
        "description": "Teach mathematics to high school students.",
        "requirements": "Applicant must be a bachelor's degree holder in the relevant subject. Masters degree will be an added advantage."
    },
    {
        "id": 2,
        "title": "Science Teacher",
        "level": "Middle School",
        "description": "Teach science to middle school students.",
        "requirements": "Applicant must be a bachelor's degree holder in the relevant subject. Masters degree will be an added advantage."
    },
    {
        "id": 3,
        "title": "Librarian",
        "level": "Elementary School",
        "description": "Manage library resources and assist students.",
        "requirements": "Applicant must be a bachelor's degree holder in the relevant subject. Masters degree will be an added advantage."
    },
    {
        "id": 4,
        "title": "Kiswahili Teacher",
        "level": "Middle School",
        "description": "Teach Kiswahili to middle school students.",
        "requirements": "Applicant must be a bachelor's degree holder in the relevant subject. Masters degree will be an added advantage."
    },
    {
        "id": 5,
        "title": "Football coach",
        "level": "All levels",
        "description": "Offer professional coaching to the school football team.",
        "requirements": "Applicant must have at least 5 years experience in coaching a school team."
    }
]
    
    def seed_jobs():
        for job_data in job_details:
            job = Job(**job_data)
            db.session.add(job)
        db.session.commit()

    seed_jobs()
    print("Seed data created successfully!")