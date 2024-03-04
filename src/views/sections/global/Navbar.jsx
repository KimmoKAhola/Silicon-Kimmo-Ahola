import React from 'react'
import {Link, NavLink} from "react-router-dom";
import Logo from '../../../images/logo/silicon-logo-light_theme.svg'

const Navbar = () => {
    return (
        <header>
            <div className="container">

                <div className="left"><Link id="logo" to="/">
                    <img src={Logo} alt="silicon logotype"/>
                </Link>
                    <nav id="menu">
                        <div className="menu-links">
                            <NavLink className="nav-link" to="/#overview">Overview</NavLink>
                            <NavLink className="nav-link" to="/#features">Features</NavLink>
                            <NavLink className="nav-link" to="/#news">News</NavLink>
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </div>
                    </nav>
                </div>

                <div className="right">
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                    <button>Toggle light/dark</button>
                    <button>Sign in/up</button>

                </div>

            </div>

        </header>
    )
}
export default Navbar
