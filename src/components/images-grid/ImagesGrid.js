import React from 'react'

import './images-grid.css'

const imgUrls = [
    'https://images.unsplash.com/photo-1537790698196-aad88bf9bb27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2592&q=80',
    'https://images.unsplash.com/photo-1541214113241-21578d2d9b62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    'https://images.unsplash.com/photo-1496905583330-eb54c7e5915a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
    'https://media2.s-nbcnews.com/j/newscms/2018_22/1343074/spicy_seattle_hot_dogs_8586cd307e2c19688e3f7541cb17c558.today-inline-large.jpg',
    'https://assets.marthastewart.com/styles/wmax-520-highdpi/d38/chicago-dog-madhungry002-0711mld107324/chicago-dog-madhungry002-0711mld107324_horiz.jpg?itok=UMR1bEDa',
    'https://tasteandsee.com/wp-content/uploads/2016/06/dogs-OT-CU-2E.jpg',
    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/10/20/0/tu0212_dogs2.jpg.rend.hgtvcom.826.620.suffix/1371584101307.jpeg',
    'https://d1doqjmisr497k.cloudfront.net/-/media/mccormick-us/recipes/mccormick/c/800/coney_chili_hot_dogs_800x800.ashx?vd=20180710T044324Z&hash=872E9355EC836F5962691D791EDDEF2EFFCD1A74',
    'https://www.strawberryblondiekitchen.com/wp-content/uploads/2019/06/Chicago-Style-Hot-Dog-Recipe-2828_hero.jpg',
    'https://images.unsplash.com/photo-1556611971-08e0558d9f35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    'http://shawarmarepublic.com.ng/wp-content/uploads/2018/10/Basic-Hot-Dogs2-600x500.jpg',
    'https://cdn-image.myrecipes.com/sites/default/files/styles/medium_2x/public/image/recipes/mr/hawaiian-hot-dog-topper-ck-x.jpg?itok=MrEoa418'
];

class ImagesGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentIndex: null };
        this.renderImageContent = this.renderImageContent.bind(this);
    }

    renderImageContent(src, index) {
        return (
            <div className="image-wrapper" key={index}>
                <img src={src} alt="hot dog"/>
            </div>
        )
    }

    render() {
        return (
            <div className="images-grid">
                {imgUrls.map(this.renderImageContent)}
            </div>
        )
    }
}

export default ImagesGrid
