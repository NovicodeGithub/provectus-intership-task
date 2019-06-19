import React from 'react'
import { Link } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

import './footer.css'

const Footer = () => (
    <footer className="page-footer" role="contentinfo">
        <div className="content-wrapper">
            <ul className="footer-info">
                <li className="footer-item">
                    274 Marconi Blvd. Columbus, Ohio 43215
                </li>

                <li className="footer-item">
                    614.538.0095
                </li>

                <li className="footer-item">
                    <Link to={ROUTES.CONTACT}>Contact Us</Link>
                </li>
            </ul>

            <span className="copyright">Copyright © 2019 Ricco. All rights reserved.</span>
        </div>
    </footer>
)

export default Footer;
