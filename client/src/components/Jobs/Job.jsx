import React from 'react';

const Job = ({ job }) => {
  return (
    <div className="job">
      
      <h3> <strong>Job ID :</strong> {job.id}</h3>
      <h3> <strong>Job Title :</strong> {job.title}</h3>
      <h3><strong>Teaching Level:</strong> {job.location}</h3>
      <h3><strong>Job Description:</strong>{job.description}</h3>
      <p><strong>Academic Requirements:</strong>{job.academic_requirements}</p>
      <br />
    </div>
  );
}

export default Job;