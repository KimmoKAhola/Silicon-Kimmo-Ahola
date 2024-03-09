import React from 'react'


const Card = ({data}) => {
    return (
        <div className="news-card">
            <img src={data.imageUrl} alt="TODO"/>
            <div>
                <div id="heading">
                    <p>{data.category}</p>
                    <p>{data.published}</p>
                </div>
                <h4>{data.title}</h4>
                <img src={data.author.profileImageUrl} alt="TODO"/>
                <p>{data.author.firstName} {data.author.lastName}</p>
            </div>
        </div>
    )
}
export default Card
