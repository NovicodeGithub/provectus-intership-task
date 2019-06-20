import React from 'react'

import '../styles/normalize.css'
import '../styles/typography.css'
import './app.css'

import Header from './header/Header';
import ImagesGrid from './images-grid/ImagesGrid';
import Footer from './footer/Footer';

import AboutUsPage from '../pages/about-us-page/AboutUsPage';
import ContactPage from '../pages/contact-page/ContactPage';
import MenuPage from '../pages/MenuPage';
import CateringPage from '../pages/CateringPage';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

class App extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path={ROUTES.ABOUT_US} component={ImagesGrid} />

                <Header />
                <main className="content">
                    <Route exact path={ROUTES.ABOUT_US} component={AboutUsPage} />
                    <Route path={ROUTES.CONTACT} component={ContactPage} />
                    <Route path={ROUTES.MENU} component={MenuPage} />
                    <Route path={ROUTES.CATERING} component={CateringPage} />
                </main>
                <Footer />
            </Router>
        )
    }
}

export default App;
