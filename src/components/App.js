import React from 'react'

import '../styles/normalize.css'
import '../styles/typography.css'
import './app.css'

import Header from './header/Header';
import ImagesGrid from './images-grid/ImagesGrid';
import Footer from './footer/Footer';

import MenuPage from '../pages/menu-page/MenuPage';
import ContactPage from '../pages/contact-page/ContactPage';
import AboutUsPage from '../pages/about-us-page/AboutUsPage';
import CateringPage from '../pages/catering-page/CateringPage';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

class App extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path={ROUTES.MENU} component={ImagesGrid} />

                <Header />
                <main className="content">
                    <Route exact path={ROUTES.ABOUT_US} component={AboutUsPage} />
                    <Route exact path={ROUTES.CONTACT} component={ContactPage} />
                    <Route exact path={ROUTES.MENU} component={MenuPage} />
                    <Route exact path={ROUTES.CATERING} component={CateringPage} />
                </main>
                <Footer />
            </Router>
        )
    }
}

export default App;
