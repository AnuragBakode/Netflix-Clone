import React from "react";
import "./ProfileScreen.css";
import Navbar from "./Navbar";
import PlansScreen from "./PlansScreen";

function ProfileScreen(props) {
  const signOut = () => {
    props.setLogoutThing(null)
  }

  return (
    <div className="profileScreen">
      <Navbar />
      <div className="profileScreenBody">
        <h1>Edit Profile</h1>
        <div className="info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="details">
              <h2>{props.user}</h2>
              <div className="plans">
                  <h3>Plans</h3>
                  <PlansScreen />
                  <button onClick = {signOut} className="SignOut">Sign Out</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
