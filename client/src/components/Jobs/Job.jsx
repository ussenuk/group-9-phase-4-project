import React from 'react';

const Job = ({ job }) => {
  return (
    <div className="job">
      <h3>{job.title}</h3>
      <p><strong>Location:</strong> {job.location}</p>
      <p>{job.description}</p>
    </div>
  );
}

export default Job;