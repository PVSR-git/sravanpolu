import React from "react";
import { loginUser } from "../api";
import {
  redirect,
  useLoaderData,
  useNavigate,
  Form,
  useActionData,
} from "react-router-dom";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}
export async function action({ request }) {
  const formData = await request.formData();
  const password = formData.get("password");
  const email = formData.get("email");
  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("loggedin", true);

    return redirect("/photos");
  } catch (err) {
    return err.message;
  }
}

export default function Login() {
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = React.useState("idle");
  const [error, setError] = React.useState(null);
  const errorMessage = useActionData();
  const message = useLoaderData();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    loginUser(loginFormData)
      .then((data) => {
        navigate("/home", { replace: true });
      })
      // .catch(err=>setError(err))
      .finally(() => setStatus("idle"));
    console.log(loginFormData);
  }

  function handleChange(e) {
    const { name, value } = e.target; // Fix typo from 'e.tartget' to 'e.target'
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
      <h1>Sing in to your account</h1>
      {message && <h2 className="red">{message}</h2>}
      {/* {error && <h4 className="red">{error.message}</h4>} */}
      {errorMessage && <h4 className="red">{errorMessage}</h4>}
      <Form method="post" className="login-form" replace>
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
        <button disabled={status === "submitting"}>
          {status === "submitting" ? "LogIng in ..." : "Log in"}
        </button>
      </Form>
    </div>
  );
}
