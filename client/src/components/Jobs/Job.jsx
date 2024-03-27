import React from 'react';

const Job = ({ job }) => {
  return (
    <div className="job">
      <li>
      <h3> <strong>Job Title :</strong> {job.title}</h3>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Job Description:</strong>{job.description}</p>
      </li>
    </div>
  );
}

export default Job;