import React from 'react';
import API from '../../apis/herokuapp'

class HotDogArticlesList extends React.Component {
    state = {
        articles: []
    }

    componentDidMount() {
        API.get('/menu')
        .then(res => {
            const articles = res.data;
            this.setState({ articles });
        })
    }

    render() {
        return (
            <div className="hotdogs-list">
                {this.state.articles.map((article, index) =>
                    <section className="hotdog-item" key={index}>
                        <h2>{article.name}</h2>
                        <span className="hotdog-description">
                            {article.description}
                        </span>
                        <img src={article.backgroundURL} alt="hot dog"/>
                    </section>
                )}
            </div>
        )
    }
}

export default HotDogArticlesList
