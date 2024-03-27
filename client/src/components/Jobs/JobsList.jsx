
import React from "react";
import Job from "./Job"; // Importing the Job component

const JobsComponent = () => {
  const jobs = [
    {
      id: 1,
      title: "Math Teacher",
      location: "High School",
      description: "Teach mathematics to high school students.",
    },
    {
      id: 2,
      title: "Science Teacher",
      location: "Middle School",
      description: "Teach science to middle school students.",
    },
    {
      id: 3,
      title: "Librarian",
      location: "Elementary School",
      description: "Manage library resources and assist students.",
    },
  ];

  return (
    <div>
      <h2>Current Job Openings:</h2>
      <div className="jobs-list">
        {jobs.map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobsComponent;
