import React, { useState } from "react";
import "./SignInScreen.css";

function SignInScreen(props) {
    const [user ,setuser] = useState({
        username :"",
        password :""
    })

    const register = (e) =>{
        e.preventDefault()
        props.handlenewUser(user)
    }
    const signIn = (e) =>{
        e.preventDefault()
        // console.log(user)
        props.handleSignInUser(user)
    }

  return (
    <div className="signinScren">
      <form action="">
        <p style = {{
          textAlign : "left",
          color : `${!props.textcolor ? "green" : "red"}`
          
        }} >{props.status}</p>
        <h1>Sign In</h1>
        <input value = {user.username} onChange = {(e)=> setuser({...user ,username : e.target.value})} type="email" placeholder="Email" />
        <input value = {user.password} onChange = {(e)=> setuser({...user ,password : e.target.value})} type="password" placeholder="Password" />
        <button onClick={signIn} type="submit">Sign In</button>
        <h4>
          <span className="grayText">New to Netflix?</span>{" "}
          <span className="SignUpLink" onClick={register}>Sign Up now.</span>{" "}
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;
