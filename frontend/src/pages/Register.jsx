import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

function Register() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {

    try {

      const res = await API.post("/auth/register", {
        email,
        password,
      });

      setMessage("Registration successful");

      setTimeout(() => navigate("/"), 1000);

    } catch (err) {

      setMessage("Registration failed");

    }

  };

  return (
    <div className="container">

      <h2>Register</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleRegister}>
        Register
      </button>

      <p>{message}</p>

    </div>
  );
}

export default Register;