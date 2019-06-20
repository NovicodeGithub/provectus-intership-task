import React from 'react';
import API from '../../apis/herokuapp'

import './hotdogs-article-list.css'

class HotDogArticlesList extends React.Component {
    state = {
        articles: [],
        filteredArticlesByDate: []
    }

    componentDidMount() {
        API.get('/menu')
        .then(res => {
            const articles = res.data
            this.setState({ articles })
            this.filterByDate(articles)
        })
    }

    filterByDate (articles, filteredArticlesByDate) {
        let startDate = new Date("2018-08-04").getTime()

        filteredArticlesByDate = articles.filter(function (article) {
            let hitDates = article.expirationDate || {}

            hitDates=hitDates.split("-");
            let date = new Date(parseInt(hitDates[2], 10), parseInt(hitDates[0], 10) - 1 , parseInt(hitDates[1]), 10).getTime();

            return date >= startDate
        })
        this.setState({ filteredArticlesByDate })
    }

    render () {
        const { articles } = this.state
        return articles ?
            this.renderData(articles) :
            this.renderLoading()
    }

    renderData (filteredArticlesByDate) {
        if (filteredArticlesByDate.length) {
            return (
                <div className="hotdogs-list">
                    {this.state.filteredArticlesByDate.map((article, index) =>
                        <section className="hotdog-item" key={index}>
                            <div className="header-wrapper">
                                <h2>{article.name}</h2>
                                <span className="hotdog-description">
                                    {article.description}
                                </span>
                            </div>

                            <div className="image-wrapper">
                                <img src='https://images.unsplash.com/photo-1541214113241-21578d2d9b62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80' className="article-image" alt="hot dog"/>
                            </div>
                        </section>
                    )}
                </div>
            )
        } else {
            return <div className="articles-failure-warning">No articles found</div>
        }
    }

    renderLoading () {
        return <div className="articles-preloader">Loading...</div>
    }
}

export default HotDogArticlesList
