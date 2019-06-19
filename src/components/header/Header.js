import React from 'react'
import { Link } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

import './header.css'

class Header extends React.Component {
    changeMenuState() {
        let mainNav = document.getElementById("menu-responsive");
        if (mainNav.className === "mainmenu") {
            mainNav.className += " responsive";
        } else {
            mainNav.className = "mainmenu";
        }
    }

    render() {
        return (
            <header className="page-header">
                <nav className="mainmenu" id="menu-responsive" role="navigation">
                    <ul className="menu-list">
                        <li className="menu-item">
                            <Link to={ROUTES.MENU}>Menu</Link>
                        </li>

                        <li className="menu-item">
                            <Link to={ROUTES.CATERING}>Catering</Link>
                        </li>

                        <li className="menu-item">
                            <Link to={ROUTES.ABOUT_US}>About us</Link>
                        </li>

                        <li className="menu-item">
                            <Link to={ROUTES.CONTACT}>Contact</Link>
                        </li>
                    </ul>

                    <div role="button" onClick={this.changeMenuState} aria-label="Menu" id="main-nav-toggle">
                        Menu
                        <span className="dropdown-icon"></span>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header
