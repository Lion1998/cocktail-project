import './LoginRegister.css';
import React, {useContext, useState} from 'react';
import { Context } from "../../Context";
import { useNavigate } from 'react-router-dom';
import BookTable from '../BookTable/BookTable'
import {Route} from 'react-router-dom';

export default function Login() {
    const { state, dispatch } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      fetch("https://localhost:7213/api/Authentication", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((result) => {
          if (!result.ok) {
            throw new Error(`Request failed with status: ${result.status}`);
          }
          return result.text();
        })
        .then((data) => {
          dispatch({ type: "setToken", payload: data });
        })
        .catch((error) => {
          console.error(error);
        });
    };
  
    const navigate = useNavigate();
    const navigateRegister = () => {
      navigate("/register");
    };
    const navigateSite = () => {
      navigate("/");
    };
  
    return (
      <div className="loginRegister">
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <div className="auth_form_container">
            <label htmlFor="email">email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="youreamil@******.com"
              id="email"
              name="email"
            />
            <label htmlFor="password">password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              id="password"
              name="password"
            />
            <button type="submit">Log In</button>
            {!state.token ? (
              <Login />
            ) : (
              <Route path="/book_table" element={<BookTable />} />
            )}
            <button className="link-btn" onClick={navigateRegister}>Don't have an account? Register here.</button>
                      <button className="button_SendHome" onClick={navigateSite}>Back to Site</button>
          </div>
        </form>
      </div>
    );
  };