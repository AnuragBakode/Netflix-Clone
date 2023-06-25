import React from "react";
import "./AskedQuestions.css";
import Question from "./Question";

function AskedQuestions(props) {
  // const [signIn, setSignIn] = useState(true);
const signIn = true
  const handleSecondryStarted = (e) => {
    e.preventDefault()
    props.getsigninStatus(signIn)
  }
  return (
    <div className="askedQuestion">
      <h1>Frequently Asked Questions</h1>
      <Question
        title="What is Netflix?"
        desc="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
        You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
      />
      <Question
        title="How much does Netflix cost?"
        desc="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts."
      />
      <Question
        title="Where can I watch?"
        desc="Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
      />
      <Question
        title="How do I cancel?"
        desc="Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
      />
      <Question
        title="What can I watch on Netflix?"
        desc="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
      />
      <Question
        title="Is Netflix good for kids?"
        desc="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
      />
      <div className="bottom">
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="loginScreenInput">
          <form>
            <input type="email" placeholder="Email Address" />
            <button onClick={handleSecondryStarted} className="getstartbtn secondStartBtn">
              GET STARTTED
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AskedQuestions;
