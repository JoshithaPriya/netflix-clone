import React, { useEffect, useState } from 'react'
import './PLayer.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
const Player = () => {
  const navigate = useNavigate();
  const {id}= useParams();

  const [apiData, setapiData] = useState({
      name: "",
      key: "",
      published_at: "",
      typeof: ""

  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDlkOThkM2Q3NGFiY2ZiMjljZjJmZTRhZGI5OTYwYyIsIm5iZiI6MTczNzc5NTAyOC41NDksInN1YiI6IjY3OTRhNWQ0NWE3ZDgwNzMxZDE4N2E3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rmQuMotNECoM2PW7b8X23wbw30PVCOHV8nrnP_lIa3Y'
    }
  };
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setapiData(res.results[0]))
    .catch(err => console.error(err));
  },[])


  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe width='80%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-icon">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
