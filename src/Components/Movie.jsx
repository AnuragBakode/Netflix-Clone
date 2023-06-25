import React, { useState } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
// import Navbar from './Navbar';
// import requests from '../requests';
import Footer from './Footer';
// import Row from './Row';

function Movie(props) {
    const [trailerURL , setTrailerURL] = useState("")
    const opts = {
        height: '700',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      

    movieTrailer(props.moviedataplay.name || props.moviedataplay.title || props.moviedataplay.original_name || "")
     .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerURL(urlParams.get('v'));
     })
     .catch((error) => console.log(error))
    return (
        <div className = "movie">
             
             <div className="trailer">
             {trailerURL && <YouTube videoId = {trailerURL} opts = {opts}/> } 
              
             </div>
             {/* <div className="details">
                 <img className ="details_image" src={`https://image.tmdb.org/t/p/original/${props.moviedataplay.image}`} alt="" />
             </div> */}
             <Footer />
             
        </div>
    )
}

export default Movie;
