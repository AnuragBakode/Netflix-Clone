import React, { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./Components/Homepage";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./Components/LoginScreen";
import ProfileScreen from "./Components/ProfileScreen";
import MovieScreen from "./Components/MovieScreen";
import Movie from "./Components/Movie";
import SearchedMovie from "./Components/SearchedMovie";
import TvShows from "./Components/TvShows";
import NavMovie from "./Components/NavMovie";

function App() {
  const [user, setuser] = useState(null);
  // var loggeduser = null;
  const [userInOurApp, setuserInOurApp] = useState([]);
  // const loggeduser = useRef(null)
  const [movieData, setmovieData] = useState({
    title: "",
    image: "",
    desc: "",
  });

  const [status, setstatus] = useState(null);

  const [color, setcolor] = useState(null);

  const [moviedataplay, setmoviedataplay] = useState("");

  const [searchedMovieData, setSearchedMovieData] = useState([]);

  useEffect(() => {
    console.log(user);
    // loggeduser.current = user
    // console.log(loggeduser)
  }, [user]);

  const handleUser = (userdetail) => {
    // console.log(userdetail)
    for (let i = 0; i < userInOurApp.length; i++) {
      if (
        userInOurApp[i].username === userdetail.username &&
        userInOurApp[i].password === userdetail.password
      ) {
        // console.log(user);
        setuser(userdetail.username);
        setstatus(null);
        setcolor(null);
        // var user = userdetail.username;
        // let currentUser = user
        // console.log(user);
        // console.log(userdetail);
        // console.log(userInOurApp)
        return;
      }
    }
    // alert("No Netflix account is registered with this mail\nYou need to Sign Up !!");
    setstatus("Account Not Registered");
    setcolor("red");
  };

  const handleNewUser = (newuserdetail) => {
    for (let i = 0; i < userInOurApp.length; i++) {
      if (
        userInOurApp[i].username === newuserdetail.username &&
        userInOurApp[i].password === newuserdetail.password
      ) {
        // console.log("Already Registered")4
        // alert("Already Registered a Netflix account with this mail");
        setstatus("Already Registered");
        setcolor("red");
        return;
      }
    }
    setuserInOurApp([...userInOurApp, newuserdetail]);
    // alert("Succefully Created a Netflix account with this mail");
    setstatus("Succefully Created an account");
    setcolor(null);
    // console.log("Successfully Registered")
  };

  const setLogoutThing = (logoutthing) => {
    setuser(logoutthing);
    // var user = [logoutthing]
  };

  const gettingMoviedata = (title, image, desc) => {
    setmovieData({ title: title, image: image, desc: desc });
  };

  const datafromMovieScreenItself = (title, image, desc) => {
    setmovieData({ title: title, image: image, desc: desc });
  };

  const handleMoviePlay = (movie) => {
    setmoviedataplay(movie);
  };

  const getMoviedata = (moviedata) => {
    setmoviedataplay(moviedata);
  };

  const gettingSearchedMovieData = (gotTheSearchedMovieData) => {
    // console.log(gotTheSearchedMovieData)
    setSearchedMovieData(gotTheSearchedMovieData);
  };

  const takingData = (title, image, desc) => {
    setmovieData({ title: title, image: image, desc: desc });
  };

  const gettingTvShowsData = (title, image, desc) => {
    setmovieData({ title: title, image: image, desc: desc });
  };

  const gettingNavMoviesData = (title, image, desc) => {
    setmovieData({ title: title, image: image, desc: desc });
  };
  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginScreen
            handleUser={handleUser}
            handleNewUser={handleNewUser}
            status={status}
            color={color}
          />
        ) : (
          <Switch>
            <Route exact path="/">
              <Homepage
                gettingMoviedata={gettingMoviedata}
                handleMoviePlay={handleMoviePlay}
                gettingSearchedMovieData={gettingSearchedMovieData}
              />
            </Route>
            <Route path="/profile">
              <ProfileScreen user={user} setLogoutThing={setLogoutThing} />
            </Route>
            <Route path="/film">
              <MovieScreen
                moviedata={movieData}
                datafromMovieScreenItself={datafromMovieScreenItself}
                getMoviedata={getMoviedata}
                gettingSearchedMovieData={gettingSearchedMovieData}
              />
            </Route>
            <Route path="/movie">
              <Movie moviedataplay={moviedataplay} />
            </Route>
            <Route path="/searchedmovie">
              <SearchedMovie
                movieDATA={searchedMovieData}
                takingData={takingData}
              />
            </Route>
            <Route path="/tvshows">
              <TvShows gettingTvShowsData={gettingTvShowsData} />
            </Route>
            <Route path="/navmovie">
              <NavMovie gettingNavMoviesData={gettingNavMoviesData} />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
