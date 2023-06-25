import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "../axios";
import requests from "../requests";
import "./TvShows.css";

function TvShows(props) {
const history = useHistory()
  const baseURL = "https://image.tmdb.org/t/p/original/";
  const [tvShow, settvShow] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTvShows);
      // console.log(request)
      settvShow(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  const handleMovieClick = (title , image , decs) => {
      props.gettingTvShowsData(title , image , decs)
      history.push("/film")
  }
  return (
    <div className="tvShows">
      <h1>Popular Tv Shows</h1>
      <div className="tvShowsPoster">
        {tvShow.map((show) => (
          <img
            onClick = {() => handleMovieClick(show?.title || show?.name || show?.original_name , show.backdrop_path , show.overview)}
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

export default TvShows;
