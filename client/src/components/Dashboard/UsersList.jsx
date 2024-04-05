import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/users")
      .then((r) => r.json())
      .then(setUsers);
  }, []);

  return (
    
    <section style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <div style={{textAlign: "center"}}>
        <h2><strong><u>LIST OF ALL USERS</u></strong></h2>
        </div>
        
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #ddd" }}>
              <th style={{ border: "1px solid #ddd", padding: "7px" }}>USER ID</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>FULLNAME</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>AGE (Yrs)</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>GENDER</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>ROLE</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>BIO</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{user.id}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{user.fullname}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{user.age}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{user.gender}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{user.role}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px",  whiteSpace: "normal" }}>{user.bio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

  );
}

export default UsersList;