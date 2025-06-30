import React, { useEffect, useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  return (
    <ul className="space-y-2">
      {users.map((user) => (
        <li key={user.id} className="p-2 border rounded">
          {user.name}
        </li>
      ))}
    </ul>
  );
}