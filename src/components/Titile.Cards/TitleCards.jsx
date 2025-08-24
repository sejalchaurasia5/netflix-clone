import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'

const TitleCards = ({title, category}) => {

  const [apiData, setApiData] =  useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzVjYjUyNzUzYzA1YjExYTU3ZjFiZDU1MzYzNjI2MCIsIm5iZiI6MTc1NjA0MTY1My41MjEsInN1YiI6IjY4YWIxMWI1ZmI3YzE4MDExM2E5YTA3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cj9d6UIu-UsZWLh6tSnK9QdZaWIqQ4WtSfpmzRSg9i8'
    }
  };



    const handleWheel = (event)=>{
      event.preventDefault();
      cardsRef.current.scrollLeft += event.deltaY;
    }

    useEffect(()=>{

      fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));

      cardsRef.current.addEventListener('wheel', handleWheel);
    },[])

  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index)=>{
          return <div className="card" key={index}>
            <img src={'https://image.tmdb.org/t/p/w500/'+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards
