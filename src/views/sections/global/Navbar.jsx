import React, {useState} from 'react'
import {Link, NavLink} from "react-router-dom";
import Logo from '../../../images/logo/silicon-logo-light_theme.svg'
import User from '../../../images/icons/user.svg'
import Hamburger from '../../../images/icons/bx-menu.svg'
import ArrowButton from "./ArrowButton.jsx";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }


    return (
        <div className="container">
            <header className={`navbar ${isOpen ? 'active' : ''}`}>
                <div className="site-navigation">
                    <Link id="logo" to="/">
                        <img src={Logo} alt="silicon logotype"/>
                    </Link>
                    <nav id="menu">
                        <NavLink className="nav-link" to="/#overview">Overview</NavLink>
                        <NavLink className="nav-link" to="/#features">Features</NavLink>
                        <Link className="nav-link" to="/news">News</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </nav>
                </div>

                <div className="site-settings">
                    <div id="theme-mode" className="theme-switch">
                        <label htmlFor="theme-switch-mode">Light</label>
                        <label className="switch">
                            <input id="theme-switch-mode" type="checkbox"/>
                            <span className="slider round"></span>
                        </label>
                        <label htmlFor="theme-switch-mode">Dark</label>
                        <button id="sign-in-button" className="primary-button"><img src={User} alt="user"/> <span>Sign in / up</span>
                        </button>
                    </div>
                    <button onClick={toggleMenu} className="hamburger-menu">
                        <img className="mobile-menu" src={Hamburger} alt="mobile menu"/>
                    </button>
                </div>
            </header>
            {isOpen && (
                <nav id="mobile-menu" className={isOpen ? 'active' : ''}>

                    <div className="mobile-item">
                        <NavLink className="nav-link" to="/#overview">Overview</NavLink>
                    </div>

                    <div className="mobile-item">
                        <NavLink className="nav-link" to="/#features">Features</NavLink>
                    </div>

                    <div className="mobile-item">
                        <Link className="nav-link" to="/news">News</Link>
                    </div>

                    <div className="mobile-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </div>


                    <button className="primary-button" id="mobile-sign-in-button"><img src={User} alt="TODO"/> <span>Sign in / up</span>
                    </button>


                </nav>

            )}
        </div>
    )
}
export default Navbar
