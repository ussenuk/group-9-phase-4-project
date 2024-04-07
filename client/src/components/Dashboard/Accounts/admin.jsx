import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

export default function TeacherStudentTables() {
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);
  const [teacherPage, setTeacherPage] = useState(0);
  const [studentPage, setStudentPage] = useState(0);
  const [teacherRowsPerPage, setTeacherRowsPerPage] = useState(10);
  const [studentRowsPerPage, setStudentRowsPerPage] = useState(10);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5555/salaries");
        if (!response.ok) {
          throw new Error("Failed to fetch teachers data");
        }
        const data = await response.json();
        const formattedTeachers = data.map((teacher) => ({
          teacher_id: teacher.teacher_id,
          teacher_name: teacher.teacher_name,
          salary: teacher.salary,
          description: teacher.description,
        }));
        setTeachers(formattedTeachers);
      } catch (error) {
        console.error("Error fetching teachers data:", error.message);
        setTeachers([]);
      }
    };

    const fetchStudents = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5555/accounting_report");
        if (!response.ok) {
          throw new Error("Failed to fetch students data");
        }
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching students data:", error.message);
        setStudents([]);
      }
    };

    fetchTeachers();
    fetchStudents();
  }, []);

  const handleTeacherDelete = async (teacherId) => {
    try {
      const response = await fetch(`http://127.0.0.1:5555/admin/${teacherId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Teacher deleted successfully");
        setTeachers((prevTeachers) =>
          prevTeachers.filter((teacher) => teacher.teacher_id !== teacherId)
        );
      } else {
        throw new Error("Failed to delete teacher");
      }
    } catch (error) {
      console.error("Error deleting teacher:", error.message);
    }
  };
  

  const handleStudentDelete = async (studentId) => {
    try {
      const response = await fetch(`http://127.0.0.1:5555/admin/${studentId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Student deleted successfully");
        setStudents(
          students.filter((student) => student.student_id !== studentId)
        );
      } else {
        throw new Error("Failed to delete student");
      }
    } catch (error) {
      console.error("Error deleting student:", error.message);
    }
  };

  return (
    <div>
      <Paper sx={{ width: "100%", overflow: "hidden", marginBottom: "20px" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="teacher table">
            <TableHead>
              <TableRow>
                <TableCell>Teacher ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Salary</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {teachers
                .slice(
                  teacherPage * teacherRowsPerPage,
                  teacherPage * teacherRowsPerPage + teacherRowsPerPage
                )
                .map((teacher) => (
                  <TableRow key={teacher.teacher_id}>
                    <TableCell>{teacher.teacher_id}</TableCell>
                    <TableCell>{teacher.teacher_name}</TableCell>
                    <TableCell>{teacher.salary}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleTeacherDelete(teacher.teacher_id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={teachers.length}
          rowsPerPage={teacherRowsPerPage}
          page={teacherPage}
          onPageChange={(event, newPage) => setTeacherPage(newPage)}
          onRowsPerPageChange={(event) => {
            setTeacherRowsPerPage(+event.target.value);
            setTeacherPage(0);
          }}
        />
      </Paper>

      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="student table">
            <TableHead>
              <TableRow>
                <TableCell>Student ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Fee Status</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Balance</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students
                .slice(
                  studentPage * studentRowsPerPage,
                  studentPage * studentRowsPerPage + studentRowsPerPage
                )
                .map((student) => (
                  <TableRow key={student.student_id}>
                    <TableCell>{student.student_id}</TableCell>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.fee_status}</TableCell>
                    <TableCell>{student.paid}</TableCell>
                    <TableCell>{student.balance}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleStudentDelete(student.student_id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={students.length}
          rowsPerPage={studentRowsPerPage}
          page={studentPage}
          onPageChange={(event, newPage) => setStudentPage(newPage)}
          onRowsPerPageChange={(event) => {
            setStudentRowsPerPage(+event.target.value);
            setStudentPage(0);
          }}
        />
      </Paper>
    </div>
  );
}
