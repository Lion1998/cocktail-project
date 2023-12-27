import './LoginRegister.css';
import React , { useState }from 'react';
import {useNavigate} from 'react-router-dom';




export default function Register () {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setphone] = useState('');
    const [pass, setpass] = useState ('');
    const [BD, setBD] = useState('');
   const handleSubmit = (e) => {
    e.preventDefault();
    };
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    };
    const navigateSite = () => {
        navigate('/')
    };
    return(
        <div className="loginRegister">
            <form onSubmit={handleSubmit}>
                <h2>Register</h2>
                <div className="auth_form_container">
                <label htmlFor="First Name">First Name</label>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)}placeholder="First Name" id="First Name" name= "First Name" />
                <label htmlFor="Last Name">Last Name</label>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)}placeholder="Last Name" id="Last Name" name= "Last Name" />
                <label htmlFor="Email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="YourEmail@******.com" id="email" name= "email" />
                <label htmlFor="Phone">Phone</label>
                <input value={phone} onChange={(e) => setphone(e.target.value)}placeholder="Phone" id="Phone" name= "Phone" pattern="[0-9]{3}-[0-9]{4}-[0-9]{3}"></input>
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setpass(e.target.value)} type="password" placeholder="********" id="password" name= "password" />
                <label htmlFor="BD">Birthday</label>
                <input value={BD} onChange={(e) => setBD(e.target.value)}type="date" placeholder="BD" id="BD" name= "BD" />
                <button type ="submit" >Sign In</button>
                <button className="link-btn" onClick={navigateLogin}>Already have an account? Login here.</button>
                <button className="button_SendHome" onClick={navigateSite}>Back to Site</button>
                </div>
            </form>
        </div>
    );
};