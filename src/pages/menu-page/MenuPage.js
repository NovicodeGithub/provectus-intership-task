import React from 'react'
import PrimaryButton from '../../components/primary-button/PrimaryButton'
import HotDogArticlesList from '../../components/hotdogs-article-list/HotdogsArticleList'

import logo from '../../icons/icon_logo-grey.png';

import './menu-page.css'

class AboutUsPage extends React.Component {
    render() {
        return (
            <div className="content-wrapper">
                <article className="menu-item">
                    <img src={logo} alt="Dirty Dogs logo" width="92" height="92" />
                    
                    <h1>Dirty Dogs serves all-beef, vegan and vegatagian hot dogs.</h1>
                    <PrimaryButton>More Dogs‘n Make Em Hot</PrimaryButton>
                </article>

                <HotDogArticlesList />
            </div>
        )
    }
}

export default AboutUsPage
