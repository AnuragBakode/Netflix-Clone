import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "../axios";
import "./Row.css";


const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLarge, getMoviedata,margin,equalLength}) {
  const [movies, setMovies] = useState([]);
  const history = useHistory()
  // const [trailerUrl, setTrailerUrl] = useState("");

  // props.getMovieData("This is the value")

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      // console.log(request)
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);


  const handleMovieClick = (val , image , desc) => {
    
    getMoviedata(val , image , desc)
    history.push("/film")
  }



  return (
    <div className={`row ${margin && "removeMargin"}`}>
      <h2>{title}</h2>
      <div className={`row_posters ${equalLength && "equallength"}`}>
        {movies.map((movie) => (
          <img
          // onClick = {() => handleMovieClick()}
            onClick = {() => handleMovieClick(movie?.title || movie?.name || movie?.original_name , movie.backdrop_path , movie.overview)}
            key={movie.id}
            
            className={`row_poster ${isLarge && "row_posterLarge"}`}
            src={`${baseURL}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      
    </div>
  );
}

export default Row;
