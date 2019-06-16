import React from 'react'
import SearchBar from './Searchbar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import Navigation from './Navigation';

import LandingPage from '../screens/LandingPage';
import ContactPage from '../screens/ContactPage';

import '../styles/normalize.css'
import '../styles/typography.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as ROUTES from '../constants/routes'


class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        this.setState({
            videos: response.data.items
        })
    }

    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div className='ui container' style={{marginTop: '1em'}}>

                <Router>
                    <Navigation />
                    <hr />
                    <Route exact path={ROUTES.LANDING} component={LandingPage} />
                    <Route path={ROUTES.CONTACT} component={ContactPage} />
                </Router>

                <SearchBar handleFormSubmit={this.handleSubmit} />

                <div className='ui grid'>
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
