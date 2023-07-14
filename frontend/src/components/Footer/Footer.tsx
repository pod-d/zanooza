import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/Zannoza.jpeg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>Product</h4>
            <a href="">
              <p>Game Experience</p>
            </a>
            <a href="">
              <p>Data Governance</p>
            </a>
            <a href="">
              <p>Virtual Events</p>
            </a>
            <a href="">
              <p>Virtual Users</p>
            </a>
            <a href="">
              <p>Behavioral Analytics</p>
            </a>
            <a href="">
              <p>Connect</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Explore</h4>
            <a href="">
              <p>Resources</p>
            </a>
            <a href="">
              <p>Blog</p>
            </a>
            <a href="">
              <p>Documents</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Company</h4>
            <a href="">
              <p>About us</p>
            </a>
            <a href="">
              <p>Partners</p>
            </a>
            <a href="">
              <p>Custormers</p>
            </a>
            <a href="">
              <p>Contact Us</p>
            </a>
          </div>
          <div className="subscribe">
            <div className="sub_div">
              <h4>Subscribe</h4>
              <div className="input_div">
                <input type="text" placeholder="  Email address" />
                <button className="input_btn">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ color: "black", fontSize: "14px" }}
                    className="my-icon"
                  />
                </button>
              </div>

              <div className="sub_div-p">
                <p>
                  Hello, we are ABC. trying to make an effort to put the right
                  people for you to get the best results. Just insight
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>
              <img src={logo} alt="zannoza logo" className="zannozalogo" />
            </p>
          </div>
          <div className="sb__footer-below-links">
            <a href="">
              <p>Terms</p>
            </a>
            <a href="">
              <p>Privacies</p>
            </a>
            <a href="">
              <p>Cookies</p>
            </a>
          </div>
          <div className="socialmedia">
            <ul className="social-icons">
              <li>
                <a href="https://www.facebook.com">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
