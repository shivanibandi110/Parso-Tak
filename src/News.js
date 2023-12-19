export default function News(props)
{
    console.log(props)

    return(

        <div className="news">

           <div className="news-img">

             {
                props.article.urlToImage!==null?
                <img src= {props.article.urlToImage}/>:
                <img src="https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"/>
             }
              
              <img src= {props.article.urlToImage}/> 
               
           </div>

           <h1>{props.article.title}</h1>

           <p>{props.article.description?.substring(0,100).concat("...")} <a href={props.article.url} target="_blank">Read More</a> </p> 
           {/* the ? is for null string and substring will make the limits for content to show same for all */}


           <div className="source">
              <p>Author: {props.article.author}</p>
              <p>{props.article.source.name}</p>

           </div>
       
        </div>
    )
}