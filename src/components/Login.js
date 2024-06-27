import React, { useState } from "react";
import "../assets/styles/login.css";
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();

  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  //  navigate("/jobs");

  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
    // navigate("/jobs");
  };
  return (
    <div style={{display: "flex",
      justifyContent: "center",
      height: "100vh",
      alignItems: "center"}}>
      <div>
        <div
          className={`container ${
            isRightPanelActive ? "right-panel-active" : ""
          }`}
          id="container"
        >
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Create Account</h1>
              <br></br>
              {/* <div className="social-container">
                <a href="#" className="social">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="#" className="social">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use your email for registration</span> */}
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <br></br>
              <button onClick={() => navigate("/jobs")}>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <br></br>
              {/* <div className="social-container">
                <a href="#" className="social">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="#" className="social">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use your account</span> */}
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              {/* <a href="#">Forgot your password?</a> */}
              <br></br>
              <button onClick={() => navigate("/jobs")}>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back, Admin!</h1>
                <p>
                To continue managing your site, please log in with your admin credentials.
                </p>
                <button
                  className="ghost"
                  id="signIn"
                  onClick={handleSignInClick}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Admin!</h1>
                <p>Enter your credentials to start managing your site.</p>
                <button
                  className="ghost"
                  id="signUp"
                  onClick={handleSignUpClick}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
