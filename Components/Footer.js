import React, { useState } from "react";
import validator from "validator";

const Footer = () => {
  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Valid Email...");
    } else {
      setEmailError("Enter valid Email!");
    }
  };
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="footer-logo">
                <a href="/">
                  <img
                    src="./img/logo.svg"
                    className="img-fluid"
                    alt="company"
                  />
                </a>
              </div>
            </div>
            <div className="Social-media-footer col-xl-4 col-md-4 mb-30">
              <div className="footer-widget">
                {/*  */}
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="/">
                    <i className="fa fa-facebook-f facebook-bg"></i>
                  </a>
                  <a href="/">
                    <i className="fa fa-linkedin-square linkedin-bg"></i>
                  </a>
                  <a href="/">
                    <i className="fa fa-youtube google-bg"></i>
                  </a>
                  <a href="/">
                    <i className="fa fa-instagram instagram-bg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="Mail-section col-xl-4 col-md-4 mb-50">
              <div className="single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>info@businessworldtrade.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-3 pb-3">
          <div className="row row-footer-items">
            <div className="footer-li-items col-xl-3 col-lg-3 col-md-2 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>About Us</h3>
                </div>
                <ul className="footer-ul">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Career</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Privacy and Policy</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-li-items col-xl-3 col-lg-3 col-md-2 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Our Services</h3>
                </div>
                <ul className="footer-ul">
                  <li>
                    <a href="#">Advertise with Us</a>
                  </li>
                  <li>
                    <a href="#">Business Loan</a>
                  </li>
                  <li>
                    <a href="#">Business Insurance</a>
                  </li>
                  <li>
                    <a href="#">ISO Certification</a>
                  </li>
                  <li>
                    <a href="#">E-Filing</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-li-items col-xl-3 col-lg-3 col-md-2 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Buyer </h3>
                </div>
                <ul className="footer-ul">
                  <li>
                    <a href="#">Post by Requirement</a>
                  </li>
                  <li>
                    <a href="#">Search Supplier</a>
                  </li>
                  <li>
                    <a href="#">Request Callback</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-li-items col-xl-3 col-lg-3 col-md-2 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Supplier</h3>
                </div>
                <ul className="footer-ul">
                  <li>
                    <a href="#">Search Buy Leads</a>
                  </li>
                  <li>
                    <a href="#">Get Frieght Quotes</a>
                  </li>
                  <li>
                    <a href="#">Logistics</a>
                  </li>
                  <li>
                    <a href="#">ISO Certification</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className="col-xl-4 col-lg-4 col-md-4 mb-50"> */}
            <div className="d-flex justify-content-between">
              <div className="subscribe-section">
                <div className="footer-widget-heading-email">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                    Get the latest updates on new products and upcoming deals,
                    kindly fill the form below.
                  </p>
                </div>
                <div className="subscribe-form">
                  <form className="email-subscribe" action="/">
                    <input
                      type="email"
                      id="email-id"
                      placeholder="Email Address"
                      onChange={(e) => validateEmail(e)}
                    />
                    <button>
                      <i className="fab fa-telegram-plane"></i>
                    </button>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      {emailError}
                    </span>
                  </form>
                </div>

                {/* </div> */}
              </div>
              <div className="google-Partner m-auto">
                <img
                  style={{ maxHeight: "4rem", minHeight: "1rem" }}
                  src="./img/bwtGooglepartner.png"
                  alt="Google partner"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-10 text-center text-lg-left">
              <div className="copyright-text">
                <p>Copyright &copy; Infobiz World Trade All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul className="footer-ul">
                  <li>
                    <a href="/">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
