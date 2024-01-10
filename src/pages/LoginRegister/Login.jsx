import React, { useContext, useState } from "react";
import { Context } from "../../Context";
import { useNavigate } from "react-router-dom";
import BookTable from "../BookTable/BookTable";

export default function Login() {
  const { state, dispatch } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formError, setFormError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

 
    if (!email) {
      setEmailError('Email is required.');
      setFormError('Please fix the errors in the form.');
      return;
    }

    
    if (!password) {
      setPasswordError('Password is required.');
      setFormError('Please fix the errors in the form.');
      return;
    }

    try {
      const result = await fetch("https://localhost:7213/api/Authentication", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!result.ok) {
        throw new Error(`Request failed with status: ${result.status}`);
      }

      const data = await result.json();

      dispatch({ type: "setToken", payload: data });

      if (data.user.type === "Admin") {
        navigate("/admin");
      } else {
        navigate("/book_table");
      }
    } catch (error) {
      console.error(error);
      setFormError('Invalid email or password.');
    }
  };

  const navigateRegister = () => {
    navigate("/register");
  };

  const navigateSite = () => {
    navigate("/");
  };

  return (
    <div className="loginRegister">
      {!state.token ? (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <div className="auth_form_container">
            {formError && <p className="error-message">{formError}</p>}
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError('');
                setFormError(''); 
              }}
              placeholder="youremail@******.com"
              id="email"
              name="email"
              required
            />
            {emailError && <p className="error-message">{emailError}</p>}
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError('');
                setFormError(''); 
              }}
              placeholder="********"
              id="password"
              name="password"
              required
            />
            {passwordError && <p className="error-message">{passwordError}</p>}
            <button type="submit">Log In</button>
            <button className="link-btn" onClick={navigateRegister}>
              Don't have an account? Register here.
            </button>
            <button className="button_SendHome" onClick={navigateSite}>
              Back to Site
            </button>
          </div>
        </form>
      ) : (
        <BookTable/>
      )}
    </div>
  );
}
