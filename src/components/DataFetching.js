import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ul className="posts">
        {users.map((user) => (
          <li key={user.id}> {user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;
