import React from 'react'
import SearchBar from './Searchbar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import ContactForm from './ContactForm'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import '../styles/normalize.css'
import '../styles/typography.css'

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
                    <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/contact" component={SearchBar} />
                    </Switch>
                    </div>
                </Router>
                <SearchBar handleFormSubmit={this.handleSubmit} />

                <ContactForm />

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
