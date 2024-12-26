import news from '../assets/news.jpg'
const News = ({title,description,src,url}) => {
    return(
        <div className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2 py-2" style={{maxWidth:'360px'}}>
  <img src={src?src:news} style={{height:'200px',width:'325px'}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"Stay updated with the latest breaking news, featuring critical updates, expert insights, and key developments that impact your world today."}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
    )
}
export default News;