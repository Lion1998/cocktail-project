import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginRegister.css';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [BD, setBD] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [phoneError] = useState('');
  const [passwordError] = useState('');
  const [dateError] = useState('');
  const [errors, setErrors] = useState({});

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPhoneValid = (phone) => {
    return /^[0-9]{10,13}$/.test(phone);
  };

  const isDateValid = (date) => {
    return /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(date);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!isEmailValid(email)) {
      newErrors.email = 'Invalid email format.';
    }

    if (!isPhoneValid(phone)) {
      newErrors.phone = 'Invalid phone number format.';
    }

    if (password.length < 5) {
      newErrors.password = 'Password should be at least 5 characters long.';
    }

    if (!isDateValid(BD)) {
      newErrors.BD = 'Invalid date format (YYYY-MM-DD).';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch("https://localhost:7213/Register", {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: phone,
          password: password,
          BD: BD,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        console.log('הרישום הצליח!');
        setSubmitted(true);
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
    <form className="loginRegister" onSubmit={handleSubmit}>
      {submitted ? (
        <>
          <h1>Welcome, we will be happy to see you soon with us</h1>
          <button className="button_SendHome" onClick={navigateSite}>
            Back to Site
          </button>
        </>
      ) : (
        <>
          <div className="loginRegister">
            <div className="auth_form_container">
              <h1>Register</h1>
              {Object.keys(errors).length > 0 && (
                <div className="error-container">
                  <p className="error-message">
                    Please fix the following errors before submitting the form:
                  </p>
                  <ul>
                    {Object.values(errors).map((errorMessage, index) => (
                      <li key={index} className="error-message">
                        {errorMessage}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <label htmlFor="firstName">First Name</label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                id="firstName"
                name="firstName"
              />
              <label htmlFor="lastName">Last Name</label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                id="lastName"
                name="lastName"
              />
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError('');
                }}
                type="email"
                placeholder="YourEmail@******.com"
                id="email"
                name="email"
              />
              {emailError && <p className="error-message">{emailError}</p>}
              <label htmlFor="phone">Phone</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
                id="phone"
                name="phone"
                pattern="[0-9]{3}[0-9]{4}[0-9]{3}"
              />
              {phoneError && <p className="error-message">{phoneError}</p>}
              <label htmlFor="password">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="********"
                id="password"
                name="password"
              />
              {passwordError && <p className="error-message">{passwordError}</p>}
              <label htmlFor="BD">Birthday</label>
              <input
                value={BD}
                onChange={(e) => setBD(e.target.value)}
                type="date"
                placeholder="BD"
                id="BD"
                name="BD"
              />
              {dateError && <p className="error-message">{dateError}</p>}
              <button type="submit">Sign In</button>
              <button className="link-btn" onClick={navigateLogin}>
                Already have an account? Login here.
              </button>
              <button className="button_SendHome" onClick={navigateSite}>
                Back to Site
              </button>
            </div>
          </div>
        </>
      )}
    </form>
  );
};
