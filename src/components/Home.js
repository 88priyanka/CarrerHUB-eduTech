import React from 'react';
import { useEffect,useState } from 'react';
import Newsfeed from './Newsfeed.js';

const Home = () => {
    const API_KEY = "pub_59388655f45590a6b4f234c04fcaabd919ec8";
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
      fetch(`https://newsdata.io/api/1/news?apikey=${API_KEY}&q=zoho%20IT`)
      .then(response => response.json())
      .then(data => {
          setArticles(data.results);
          setLoading(false);
      })
      .catch(error => {
        console.error(error);
      })
    },[]);
    
    if(loading) {
      return <div>Loading...</div>;
    }
  return (
    <div className='homepage'>
        <Newsfeed articles={articles}/>
        
    </div>
  )
}

export default Home