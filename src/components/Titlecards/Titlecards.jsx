import React, {useRef, useEffect, useState} from 'react'
import  './Titlecards.css'
import card from '../../assets/card.js'
import { Link } from 'react-router-dom';


const Titlecards = ({title, category}) => {

  const [apidata, setapidata] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDlkOThkM2Q3NGFiY2ZiMjljZjJmZTRhZGI5OTYwYyIsIm5iZiI6MTczNzc5NTAyOC41NDksInN1YiI6IjY3OTRhNWQ0NWE3ZDgwNzMxZDE4N2E3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rmQuMotNECoM2PW7b8X23wbw30PVCOHV8nrnP_lIa3Y'
    }
  };
  
 

const handlewheel = (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}
useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response =>{
    console.log(response);
    setapidata(response.results);
  })
  .catch(err => console.error(err));


  cardsRef.current.addEventListener('wheel', handlewheel);
},[])
  return (

    

    <div className="title-cards">
      <h2> {title?title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apidata.map((cards, index) =>{
          return <Link  to={`/player/${cards.id}`} key={index} className="card">
          <img src={ `https://image.tmdb.org/t/p/w500`+cards.backdrop_path} alt="" />
          <p>{cards.original_title}</p>

          </Link>
         
})}
      </div>
    </div>
  )
}

export default Titlecards
