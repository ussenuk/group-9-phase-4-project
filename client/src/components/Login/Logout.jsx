import React, { useState } from "react";

function Logout({ setUser }) {
    useEffect(() => {
      fetch("/logout", { method: "DELETE" })
        .then((response) => {
          if (response.ok) {
            setUser(null);
          }
        });
    }, []);
  
    return <div>You have been logged out.</div>;
  }

  export default Logout;