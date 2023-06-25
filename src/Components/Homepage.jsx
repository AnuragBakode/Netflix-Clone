import React from "react";
// import "../App.css";
import Row from "./Row";
import requests from "../requests";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Homepage(props) {

  const getMoviedata = (title , image , desc ) => {
    props.gettingMoviedata(title , image , desc)
    // console.log(title)
    // console.log(image)
    // console.log(desc)
  }

  const handleMoviePlay = (movie) => {
    props.handleMoviePlay(movie)
  }


  const getSearchMovie = (searchMovieDATA) => {
    // console.log(searchMovieDATA)
    props.gettingSearchedMovieData(searchMovieDATA)
  }

  return (
    <div className="App">
      <Navbar getSearchMovie = {getSearchMovie}/>
      <Banner handleMoviePlay = {handleMoviePlay}/>
      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
        isLarge
        getMoviedata = {getMoviedata}
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} getMoviedata = {getMoviedata}/>
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} getMoviedata = {getMoviedata}/>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} getMoviedata = {getMoviedata}/>
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} getMoviedata = {getMoviedata}/>
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} getMoviedata = {getMoviedata}/>
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} getMoviedata = {getMoviedata}/>
      <Row title="Documentries" fetchURL={requests.fetchDocumentaries} getMoviedata = {getMoviedata}/>
      <Footer />
    </div>
  );
}

export default Homepage;
