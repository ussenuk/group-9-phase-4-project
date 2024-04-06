import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/jobs")
      .then((r) => r.json())
      .then(setJobs);
  }, []);

  return (
    
    <section style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <div style={{textAlign: "center"}}>
        <h2><strong><u>LIST OF ALL JOBS</u></strong></h2>
        </div>
        
        <table style={{ borderCollapse: "collapse", width: "90%" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #ddd" }}>
              <th style={{ border: "1px solid #ddd", padding: "7px" }}>JOB ID</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>TITLE</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>TEACHING LEVEL</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>DESCRIPTION</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>REQUIREMENTS</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{job.id}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{job.title}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{job.level}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{job.description}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{job.requirements}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <h4>
        To apply for any of the above jobs, please send your current CV and
        application letter to{" "}
        <a href="mailto:hr@csk.edu" style={{ color: "blue" }}>
          <u>hr@csk.edu</u>
        </a>
      </h4>
      <br />
      </div>
    </section>

  );
}

export default Jobs;