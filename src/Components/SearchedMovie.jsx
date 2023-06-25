import React from "react";
import "./SearchedMovie.css";
import requests from "../requests";
import Row from "./Row";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";

function SearchedMovie({ movieDATA ,takingData}) {
const history = useHistory()
  // const [data , setdata] = useState([])
  const baseURL = "https://image.tmdb.org/t/p/original/";
  // console.log(movieDATA)
  // const moviedataArry = [movieDATA]
  // console.log(moviedataArry)
  const datafromInnerNav = (title , image , desc ) => {
    takingData(title , image , desc)
    // console.log(title)
    // console.log(image)
    // console.log(desc)
  }

  const handleMovieClick =(title , image , desc) => {
    takingData(title , image , desc)
    history.push("/film")
  }

  return (
    <div className="searchMovie">
      <h1>Searched Results:</h1>
      <div className="setOfMovies">
        {movieDATA.map((movie) => (
          <img
            // onClick = {() => handleMovieClick()}
            onClick = {() => handleMovieClick(movie?.title || movie?.name || movie?.original_name , movie.backdrop_path , movie.overview)}
            key={movie.id}
            className="movie_image"
            src={movie.poster_path && baseURL + movie.poster_path}
            alt={movie.name}
          />
        ))}
      </div>
      <div className="SearchRow">
      <Row
            title="More like this"
            fetchURL={requests.fetchActionMovies}
            isLarge
            getMoviedata = {datafromInnerNav}
            margin
            equalLength
            
          />
      </div>
      
      <Footer />
    </div>
  );
}

export default SearchedMovie;
