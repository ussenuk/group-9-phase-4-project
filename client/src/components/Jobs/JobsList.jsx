import React from 'react';
import Job from './Job'; // Importing the Job component

class JobsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [  
        { id: 1, title: 'Math Teacher', location: 'High School', description: 'Teach mathematics to high school students.' },
        { id: 2, title: 'Science Teacher', location: 'Middle School', description: 'Teach science to middle school students.' },
        { id: 3, title: 'Librarian', location: 'Elementary School', description: 'Manage library resources and assist students.' }
      ]
    };
  }

  render() {
    const { jobs } = this.state;

    return (
      <div>
        <h2>Job Opportunities</h2>
        <div className="jobs-list">
          {jobs.map(job => (
            <Job key={job.id} job={job} />
          ))}
        </div>
      </div>
    );
  }
}

export default JobsComponent;
