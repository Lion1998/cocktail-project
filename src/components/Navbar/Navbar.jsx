/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaCocktail } from 'react-icons/fa';
import images from '../../constants/images';
import './Navbar.css';
import { Context } from '../../Context';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const { state, dispatch } = useContext(Context);
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logoNav} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="/home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
        {state.user && state.user.type === 'Admin' && (
          <li className="p__opensans">
            <NavLink to="/admin">Orders</NavLink>
          </li>
        )}
        <div className="app__navbar-login ">
          {state.user && state.user.type !== 'Admin' && (
            <a href="/book_table" className="p__opensans">Reserve a table!</a>
          )}
          {state.user == null ? (
            <a href="/login" className="p__opensans btn btn-outline-success">Login</a>
          ) : (
            <a href="/" onClick={() => dispatch({ type: "logout" })} className= "`p__opensans btn btn-outline-danger" >Logout</a>
          )}
        </div>
      </ul>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <FaCocktail fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>  
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
              {state.user && state.user.type === 'Admin' && (
                <li><NavLink to="/admin" onClick={() => setToggleMenu(false)}>Orders</NavLink></li>
              )}
              {state.user && state.user.type !== 'Admin' && (
                <li><NavLink to="/book_table" onClick={() => setToggleMenu(false)}>Reserve a table!</NavLink></li>
              )}
              {state.user == null ? (
                <li><a href="/login" onClick={() => setToggleMenu(false)}>Login</a></li>
              ) : (
                <li><a className='btn btn-outline-danger' onClick={() => dispatch({ type: 'logout' })}>Logout</a></li>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
