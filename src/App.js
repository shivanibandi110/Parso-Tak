import { useEffect, useState } from 'react';
import './App.css';
import News from './News';

function App() {

  let [articles,setArticles] = useState([]);
  let [category,setCategory] = useState("India");

   useEffect(()=>{
      
       fetch(`https://newsapi.org/v2/everything?q=${category}&from=2023-12-07&apiKey=06cc62e47b504342b232f72052273c95`)
       .then((response)=>response.json())
       .then((news)=>{
        setArticles(news.articles);
        console.log(news.articles); 
       })
       .catch((err)=>{
        console.log(err)
       })

   },[category])



  return (
    <div className="App">

    <header className='header'>
       
       <h1> Parso Tak </h1>
       <input type='text' onChange={(event)=>{
        if(event.target.value!=="")
        {
          setCategory(event.target.value);
        }
        else
        {
          setCategory("India");
        }
       }}
        placeholder='search news'/>

    </header>

     <section className='news-articles'>

     {  
        articles.length!==0?
        
        articles.map((article)=>{
          return(
            <News article = {article}/>
          )

        })
        :
        <h3>No News found For the search</h3>
     }

      {/* <News/> */}

     </section>




    </div>
  );
}

export default App;
