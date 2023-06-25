import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Navbar.css";
import requests from "../requests";
import axios from "../axios"

function Navbar(props) {
  const [searchMovie , setSearchMovie] = useState("");
  const [show, handleShow] = useState(false);
  const history = useHistory();
  const [searchTerm , setsearchTerm ] = useState("")
  const [showMenu , setshowMenu] = useState(false);

  // const dependency = requests.searchAPI+searchTerm
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.searchAPI+searchTerm);
      // console.log(request)
      setSearchMovie(request.data.results);
      return request;
    }
    fetchData();
  }, [searchTerm]);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll" , transitionNavBar);
    };
  }, []);

  const onSearchSubmit = (e) => {
    e.preventDefault();
    // console.log(searchMovie)
    // setSearchMovie("")
    props.getSearchMovie(searchMovie)
    history.push("./searchedmovie")
    
  }

  const onChange = (e) =>{
    setsearchTerm(e.target.value);
  }

  const handleTVSHOWSClick = (e) => {
    console.log(("tv clicked"))
    history.push('./tvshows')
  }

  const handleNavMovieClick = () =>{
    history.push('./navmovie')
  }

  const handleMenuClick = () => {
    if (showMenu === false){
      setshowMenu(true)
    }else{
      setshowMenu(false)
    }
    
  }

  return (
    <div className={`nav ${show && "nav_bg"}`}>
      <img
        onClick={() => {
          history.push("/profile");
          console.log("Profile clicked")
        }}
        className="nav_avatar avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Avatar"
      />
      <div className="linksResponsive">
      <i onClick={handleMenuClick} class="fas fa-bars"></i>
      <div className={`nav_links ${showMenu && "MenuClicked"}`}>
      <h3 onClick = {() => {history.push("/"); console.log("Home clicked")}}>Home</h3>
      <h3 onClick = {handleTVSHOWSClick}>TV Shows</h3>
      <h3 onClick= {handleNavMovieClick} >Movies</h3>
      {/* <h3>New & Popular</h3>
      <h3>My List</h3>
      <h3>Watch Again</h3> */}
      </div>
      </div>
      
      <div className="searchabar">
        <form className="searchInput" onSubmit = {onSearchSubmit}>
          <input onChange = {onChange} type="search" name="" id="" placeholder = "Search Movies" value = {searchTerm}/>
        </form>
      </div>

      <img
      onClick ={() => {history.push('/');
        console.log("Home clicked")
    }}
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      
    </div>
  );
}

export default Navbar;
