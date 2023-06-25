import React from "react";
import "./MovieScreen.css";
import Row from "./Row";
import requests from "../requests";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useHistory } from "react-router-dom";

function MovieScreen(props) {
  const history = useHistory()
  // const baseURL = "https://image.tmdb.org/t/p/original/";
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const getMoviedata = (title, image, desc) => {
    props.datafromMovieScreenItself(title, image, desc);
  };

  const handleSeparateMovieShow = () => {
    history.push('./movie')
    props.getMoviedata(props.moviedata)
  }

  const getSearchMovie = (searchMovieDATA) => {
    // console.log(searchMovieDATA)
    props.gettingSearchedMovieData(searchMovieDATA)
  }

  //   console.log(title);
  return (
    <div className="MovieScreen">
      <Navbar getSearchMovie={getSearchMovie}/>
      <div className="movieScreen">
        <header
          className="movieScreenbanner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${
              props.moviedata.image
                ? props.moviedata.image
                : "/7IGKrY1f1KfwMipx9wZC4NRgIdF.jpg"
            })`,
            backgroundPosition: "top center",
          }}
        >
          <div className="movieShow">
            <h1 className="name">
              {props.moviedata.title
                ? props.moviedata.title
                : "Fifty Shades of Grey"}
            </h1>
            <div className="moviebanner_buttons">
              <button onClick = {handleSeparateMovieShow} className=" banner_button">Play</button>
              <button className=" banner_button">My List</button>
            </div>
            <h1 className="banner_description">
              {truncate(
                props.moviedata.desc
                  ? props.moviedata.desc
                  : "When college senior Anastasia Steele steps in for her sick roommate to interview prominent businessman Christian Grey for their campus paper, little does she realize the path her life will take. Christian, as enigmatic as he is rich and powerful, finds himself strangely drawn to Ana, and she to him. Though sexually inexperienced, Ana plunges headlong into an affair -- and learns that Christian's true sexual proclivities push the boundaries of pain and pleasure.",
                150
              )}
            </h1>
          </div>

          <div className="gradiant"></div>
        </header>
        <div className="suggestion">
          <Row
            title="More like this"
            fetchURL={requests.fetchActionMovies}
            isLarge
            getMoviedata={getMoviedata}
          />
          <Row
            title="Suggestions"
            fetchURL={requests.fetchRomanceMovies}
            isLarge
            getMoviedata={getMoviedata}
          />
        </div>
        <Footer />
      </div>
      
    </div>
  );
}

export default MovieScreen;
