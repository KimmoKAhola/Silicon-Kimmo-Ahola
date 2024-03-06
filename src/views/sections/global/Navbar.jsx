import React from 'react'
import {Link, NavLink} from "react-router-dom";
import Logo from '../../../images/logo/silicon-logo-light_theme.svg'
import User from '../../../images/icons/user.svg'
const Navbar = () => {
    return (
        <div className="container">
            <header>
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
                    <p>Light</p>
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                    <p>Dark</p>
                    <button className="login-button"><img src={User} alt="TODO"/> <span>Sign in / up</span></button>
                </div>

            </header>
        </div>
    )
}
export default Navbar
