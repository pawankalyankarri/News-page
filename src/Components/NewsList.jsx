import { useEffect } from "react";
import { useState } from "react";
import News from "./News";

const NewsList = ({category}) => {
    const [articles, setArticles] = useState([]);
     async function getData(){
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        let res = await fetch(url)
        let result = await res.json();
         setArticles(result.articles)
    }
    useEffect(()=>{
        getData()
        },[category])
    return(
        <div >
            <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
           
            {articles.length=== 0 ? <h5 className="text-center">Loading...</h5> : articles.map((news,index)=>{
                return <News key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
            })}
        </div>
    )
}
export default NewsList; 