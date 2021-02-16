import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import Cards from './Components/Cards/Cards';



function App() {
  const [articles,setArticles]=useState([]);
  useEffect(()=>{
    const url="https://newsapi.org/v2/top-headlines?country=us&apiKey=5e6e87093be8430f9cebef7b38e8d148";
    fetch(url)
    .then(res =>res.json())
    .then(data=>{
      setArticles(data.articles)
                })
                },[])
  return (
    <div className="App">
      <Button color="primary">Hello World</Button>
      <Button variant="contained" color="secondary">Secondary</Button>
      {
        articles.map(article=><Cards article={article}></Cards>)
      }
      <h1>Headlines:{articles.length}</h1>
    </div>
  );
}

export default App;
