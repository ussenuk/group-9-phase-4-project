import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

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
        <div style={{ textAlign: "center" }}>
          <Typography variant="h5">
            <strong>
              <u>LIST OF ALL JOBS</u>
            </strong>
          </Typography>
        </div>

        <TableContainer component={Paper} style={{ width: "90%" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Job ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Teaching Level</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Requirements</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jobs.map((job) => (
                <TableRow key={job.id}>
                  <TableCell>{job.id}</TableCell>
                  <TableCell>{job.title}</TableCell>
                  <TableCell>{job.level}</TableCell>
                  <TableCell>{job.description}</TableCell>
                  <TableCell>{job.requirements}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <br />
        <Typography variant="h6">
          To apply for any of the above jobs, please send your current CV and
          application letter to{" "}
          <a href="mailto:hr@csk.edu" style={{ color: "blue" }}>
            <u>hr@csk.edu</u>
          </a>
        </Typography>
        <br />
      </div>
    </section>
  );
}

export default Jobs;
