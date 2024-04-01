import React from "react";
import Job from "./Job"; // Importing the Job component
import "./JobsList.css";

const JobsComponent = () => {
  const jobs = [
    {
      id: 1,
      title: "Math Teacher",
      location: "High School",
      description: "Teach mathematics to high school students.",
      academic_requirements:
        "Applicant must me a bachelor's " +
        "degree holder in the relevant subject. Masters degree will be an added advantage.",
    },
    {
      id: 2,
      title: "Science Teacher",
      location: "Middle School",
      description: "Teach science to middle school students.",
      academic_requirements:
        "Applicant must me a bachelor's " +
        "degree holder in the relevant subject. Masters degree will be an added advantage.",
    },
    {
      id: 3,
      title: "Librarian",
      location: "Elementary School",
      description: "Manage library resources and assist students.",
      academic_requirements:
        "Applicant must me a bachelor's " +
        "degree holder in the relevant subject. Masters degree will be an added advantage.",
    },
  ];

  return (
    <div className="jobs-list">
      <h2>
        <strong>
          <u>Current Job Openings</u>
        </strong>
      </h2>

      <div>
        {jobs.map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>

      <h4>
        To apply for any of the above jobs, please send your current CV and
        application letter to{" "}
        <a href="mailto:hr@csk.edu" style={{ color: "blue" }}>
          <u>hr@csk.edu</u>
        </a>
      </h4>
      <br />
    </div>
  );
};

export default JobsComponent;
