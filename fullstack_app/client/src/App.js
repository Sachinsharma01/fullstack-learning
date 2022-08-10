import "./App.css";
import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = async (event) => {
    setEmail("");
    setPassword("");
    event.preventDefault();
    const res = await fetch("http://localhost:4000/login");
    console.log(res);
    const data = await res.json();
    console.log(data);

    if (data.id === email && data.password === password) {
      alert("User Logged In!!");
    } else {
      alert("Invalid user");
    }
  };
  return (
    <div className="App">
      <form>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
          placeholder="EMAIL"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="PASSWORD"
        />
        <input onClick={loginHandler} type="submit" placeholder="LOGIN" />
      </form>
    </div>
  );
}

export default App;
