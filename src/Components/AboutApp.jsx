import React from "react";
import "./AboutApp.css";
import Footer from "./Footer";
import AskedQuestions from "./AskedQuestions";

function AboutApp(props) {
  const getsigninStatus = (status) => {
    props.loginStatus(status)
  }
  return (
    <div className="aboutapp">
      <div className="EnjoyonyourTv">
        <div className="content">
          <h1>Enjoy on your TV.</h1>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>

        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          alt=""
        />
      </div>
      <div className="borderbottom"></div>
      <div className="Downloadyourshows">
        <div className="content">
          <h1>Download your shows to watch offline.</h1>
          <p>Save your favourites easily and always have something to watch.</p>
        </div>

        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          alt=""
        />
      </div>
      <div className="borderbottom"></div>
      <div className="Watcheverywhere">
        <div className="content">
          <h1>Watch everywhere.</h1>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>

        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
          alt=""
        />
      </div>
      <div className="borderbottom"></div>
      <div className="Createprofilesforchildren">
        <div className="content">
          <h1>Create profiles for children.</h1>
          <p>
          Send children on adventures with their favourite characters in a space made just for them—free with your membership.
          </p>
        </div>

        <img
          src="https://occ-0-2610-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf"
          alt=""
        />
      </div>
      <div className="borderbottom"></div>
      <AskedQuestions getsigninStatus = {getsigninStatus}/>
      <div className="borderbottom"></div>
      <Footer />
    </div>
  );
}

export default AboutApp;
