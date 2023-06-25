import React, { useState, useEffect } from "react";
import "./LoginScreen.css";
import SignInScreen from "./SignInScreen";
import AboutApp from "./AboutApp";

function LoginScreen(prop) {
  const [show, handleShow] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const handleSignInUser = (userDetail) => {
    // console.log(userDetail)
    prop.handleUser(userDetail);
  };

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
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  const loginStatus = (status) => {
    setSignIn(status)
    console.log(status)
  }

  return (
    <div className="loginScreen">
      <div className="login_bg">
        <div className={`loginNav ${show && "loginNavBg"}`}>
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt=""
          />
          <div className="right">
            <select name="" id="" className="langauge navlang">
              <option value="">English</option>
              <option value="">Hindi</option>
            </select>
            <button onClick={() => setSignIn(true)} className="signbtn">
              Sign In
            </button>
          </div>
        </div>

        <div className="bggradiant"></div>
        <div className="loginBody">
          {signIn ? (
            <SignInScreen
              handleSignInUser={handleSignInUser}
              handlenewUser={prop.handleNewUser}
              status = {prop.status}
              textcolor = {prop.color}
            />
          ) : (
            <>
              <h1>Unlimited movies, TV shows and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>

              <div className="loginScreenInput">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    onClick={() => setSignIn(true)}
                    className="getstartbtn"
                  >
                    GET STARTTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
        {signIn ? null : <div className="borderbottom"></div>}
      </div>
      {signIn ? null : <AboutApp loginStatus = {loginStatus}/>}
      {/* <AboutApp /> */}
    </div>
  );
}

export default LoginScreen;
