import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsers([
      ...users,
      { name, email, password }
    ]);

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <button type="submit">Submit</button>
      </form>

      <h2>Users</h2>

      {users.map((user, index) => (
        <div key={index}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.password}</p>
        </div>
      ))}
    </>
  );
}

export default App;