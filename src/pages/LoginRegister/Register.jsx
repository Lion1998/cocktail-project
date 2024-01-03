import './LoginRegister.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setphone] = useState('');
  const [password, setpass] = useState('');
  const [BD, setBD] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://localhost:7213/Register", {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: firstName,
          lastName : lastName,
          email: email,
          phone : phone,
          password : password,
          BD : BD,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        console.log('הרישום הצליח!');
      } else {
        console.error('שגיאה במהלך הרישום:', responseData.error);
        alert(responseData.error);
      }
    } catch (error) {
      console.error('שגיאה במהלך הרישום:', error);
    }
  };

  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate('/login');
  };
  const navigateSite = () => {
    navigate('/');
  };

  return (
    <div className="loginRegister">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="auth_form_container">
          <label htmlFor="First Name">First Name</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            id="First Name"
            name="First Name"
          />
          <label htmlFor="Last Name">Last Name</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            id="Last Name"
            name="Last Name"
          />
          <label htmlFor="Email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="YourEmail@******.com"
            id="email"
            name="email"
          />
          <label htmlFor="Phone">Phone</label>
          <input
            value={phone}
            onChange={(e) => setphone(e.target.value)}
            placeholder="Phone"
            id="Phone"
            name="Phone"
            pattern="[0-9]{3}[0-9]{4}[0-9]{3}"
          />
          <label htmlFor="password">password</label>
          <input
            value={password}
            onChange={(e) => setpass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <label htmlFor="BD">Birthday</label>
          <input
            value={BD}
            onChange={(e) => setBD(e.target.value)}
            type="date"
            placeholder="BD"
            id="BD"
            name="BD"
          />
          <button type="submit">Sign In</button>
          <button className="link-btn" onClick={navigateLogin}>
            Already have an account? Login here.
          </button>
          <button className="button_SendHome" onClick={navigateSite}>
            Back to Site
          </button>
        </div>
      </form>
    </div>
  );
};
