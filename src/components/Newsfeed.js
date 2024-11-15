import React from 'react'
import '../styleSheets/Newsfeed.css'

const Home = ({articles}) => {
    return (
      <div>
        <ul>
          {articles.map((article , index) => {
            return (
                <div className='article' key={index}>
                    <img src={article.image_url} width="200px" height="200p" alt="img">{article.img_url}</img>
                    <span className='contentOfArticle'> 
                      <h1>{article.title}</h1>
                      <p>{article.description}</p>
                    </span>
                </div>
            );
          }
          )}
        </ul>
      </div>
    )
  }
  
  export default Home