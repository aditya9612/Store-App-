import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "C:/Users/A/Desktop/StoreApp/my-app/src/assets/css/AuthPage.css"

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true); // toggle login/register
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // LOGIN
      const savedUser = JSON.parse(localStorage.getItem("user"));
      if (savedUser && savedUser.email === email && savedUser.password === password) {
        navigate("/dashboard");
      } else {
        alert("Invalid credentials!");
      }
    } else {
      // REGISTER
      localStorage.setItem("user", JSON.stringify({ email, password }));
      alert("Registration successful! You can now login.");
      setIsLogin(true);
    }
  };

  return (
    <div className="form-container">
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{isLogin ? "Login" : "Register"}</button>
      </form>
      <p>
        {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
        <span className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Register here" : "Login here"}
        </span>
      </p>
    </div>
  );
}

export default AuthPage;
