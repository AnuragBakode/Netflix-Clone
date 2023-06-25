import React, { useEffect, useState } from "react";
import "./NavMovie.css";
import axios from "../axios";
import requests from "../requests";
import "./NavMovie.css"
import { useHistory } from "react-router-dom";

function NavMovie(props) {
  const history = useHistory();
  const baseURL = "https://image.tmdb.org/t/p/original/";
  const [navMovies, setnavMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      // console.log(request)
      setnavMovies(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  const handleMovieClick = (title , image, desc) => {
    props.gettingNavMoviesData(title , image , desc)
    history.push("./film")
  }


  return (
    <div className="navMovie">
      <h1>Popular Movies</h1>
      <div className="tvShowsPoster">
        {navMovies.map((show) => (
          <img
            onClick = {() => handleMovieClick(
                show?.title || show?.name || show?.original_name , show.backdrop_path , show.overview)}
            key={show.id}
            className="show_poster"
            src={show.poster_path && baseURL + show.poster_path}
            alt={show.name}
          />
        ))}
      </div>
    </div>
  );
}

export default NavMovie;
