import React from "react";
import "./Plan.css";
// import './payment.html'
import StripeCheckout from "react-stripe-checkout";
import image from '../images/logo.jpg'

function Plan(props) {
  return (
    <div className="plan">
      <div className="planinfo">
        <h5>{props.name}</h5>
        <h6>{props.description}</h6>
      </div>
      {/* <button className ="Subscribebtn">Subscribe</button> */}
      <StripeCheckout 
      name = "Netflix"
      image = {image}
      currency = "INR"
      amount = {50000}
      stripeKey="pk_test_51JMWz6SFhgeh97RkLNLPXFvIwsQj9jE6G7VoP9s3MgkfecqdDmxffmHbtHFKyry5VB9d2ckYBGG85UBD6RTuNxCK00yfesV47u" />
      {/* <button className="btn btn-danger">
        </button> */}
      {/* <form>
        <script
          src="https://checkout.razorpay.com/v1/payment-button.js"
          data-payment_button_id="pl_Hj3z5MMNk3eJM5"
        //   async
        >
          
        </script>
      </form> */}
    </div>
  );
}

export default Plan;
