import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "../axios";
import requests from "../requests";
import "./Banner.css"

function Banner(props) {
  const [movie, setMovie] = useState([]);
  const history = useHistory()

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }
    fetchData();
  }, []);

//   console.log(movie);

  function truncate(str , n){
      return str?.length > n ? str.substr(0, n-1) + "..." : str;
  }

  const handleMoviePlay = () => {
    console.log("Movie Clicked")
    history.push('./movie')
    props.handleMoviePlay(movie)
  }

  return (
    <header className="banner" 
     style = {{
         backgroundSize :"cover",
         backgroundImage : `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
         )`,
         backgroundPosition : "top center"
     }}
    >
        
        <div className="bannercontent">
            <h1 className ="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner_buttons">
                <button onClick = {handleMoviePlay} className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>
            
            <h1 className ="banner_description">
                {truncate(movie?.overview , 120)}
            </h1>
        </div>
        <div className="banner_fadebottom"></div>
    </header>
  )
}

export default Banner;
