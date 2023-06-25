import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className = "footer">
            <p>Questions? Call 000-800-040-1843</p>
            <div className="links">
                <div className="first">
                    <p>FAQ</p>
                    <p>Investor Relations</p>
                    <p>Privacy</p>
                    <p>Speed Test</p>
                </div>
                <div className="second">
                <p>Help Centre</p>
                    <p>Jobs</p>
                    <p>Cookie Preferences</p>
                    <p>Legal Notices</p>
                </div>
                <div className="third">
                <p>Account</p>
                    <p>Ways to Watch</p>
                    <p>Corporate Information</p>
                    <p>Only on Netflix</p>
                </div>
                <div className="fourth">
                <p>Media Centre</p>
                    <p>Terms of Use</p>
                    <p>Contact Us</p>
                </div>
            </div>
            <select name="" id="" className = "langauge">
                <option value="">English</option>
                <option value="">Hindi</option>
            </select>
            <p>Netflix India</p>
        </div>
    )
}

export default Footer;
