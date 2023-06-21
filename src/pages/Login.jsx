import React from "react";
import { Form, useSubmit } from "react-router-dom";
export default function Login() {
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleChange(e) {
    const { name, value } = e.targer;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <div className="login-container">
      <h1>Sing in to your account</h1>

      <form
        method="post"
        on
        onSubmit={handleSubmit}
        className="login-form"
        replace
      >
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button>Login</button>
      </form>
    </div>
  );
}
