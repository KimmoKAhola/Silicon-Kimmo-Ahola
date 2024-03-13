import React from 'react'
import Bookmark from '../../../images/news/bookmark.svg'


const Card = ({data}) => {
    return (
        <div>
            <div className="news-card">
                <div className="news-card-image-container">
                    <img className="news-card-image" src={data.imageUrl} alt="TODO"/>
                    <img className="news-card-image-bookmark" src={Bookmark} alt="TODO"/>
                </div>
                <div className="card-heading">
                    <p className="card-heading-category">{data.category}</p>
                    <p className="card-heading-date">{data.published}</p>
                </div>
                <div className="card-data">
                    <h5 id="card-author-title">{data.title}</h5>
                    <div id="card-divider"></div>
                    <span className="card-author">
                        <img src={data.author.profileImageUrl} alt="TODO"/>
                        <p>{data.author.firstName} {data.author.lastName}</p>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Card
