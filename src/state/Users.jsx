import { useEffect, useState } from "react";

export default function User() {
  const [users, setUsers] = useState([0]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <>
      <div>
        <h2>User:{users.length}</h2>
        {users.map((user) => (
          <h2 key={user.id}>name: {user.name}</h2>
        ))}
      </div>
    </>
  );
}
