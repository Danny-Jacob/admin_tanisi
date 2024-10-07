import React, { useState } from "react";
import "../assets/styles/login.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/images/Layer_1.svg"
const Login = () => {
  // const notify = () => toast.success("Successfully Registered, Please Login");
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
  const [formData, setFormData] = useState({
    mobile: "",
    name: "",
    password: "",
    adminId: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/registerAdmin";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // "registered Successfully"
        // window.location.reload();
        toast.success("Successfully Registered, Please Login ");
        // navigate("/");
        // notify();
      } else {
        console.error("Registration failed.");
        toast.error("Registeration Failed, Please try again ");
      }
    } catch (error) {
      console.error("Error:", error);
      // toast.error("Registeration Failed, Please try again ")
    }
  };
  const [loginformData, setLoginFormData] = useState({
    mobile: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    setLoginFormData({ ...loginformData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/adminlogin";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginformData),
      });

      if (response.ok) {
        toast.success("Login Successfull");
        const data = await response.json();
        console.log(data.message); // "logged in Successfully"
        console.log(data.accessToken); // JWT token
        localStorage.setItem("accessToken", data.accessToken); // Save the token
        navigate("/jobs");
        
      } else {
        console.error("Login failed.");
        toast.error("Login Failed, Please try again ");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <ToastContainer />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <div>
          <div
            className={`container ${
              isRightPanelActive ? "right-panel-active" : ""
            }`}
            id="container"
          >
            <div className="form-container sign-up-container">
              <form action="#" onSubmit={handleSubmit}>
                
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
                {/* <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" /> */}
                <input
                  type="text"
                  name="mobile"
                  placeholder="Email"
                  value={formData.mobile}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <br></br>
                <button type="submit">Sign Up</button>
              </form>
            </div>
            <div className="form-container sign-in-container">
              <form action="#" onSubmit={handleLoginSubmit}>
              <img src={logo}/>
<br/><br/><br/>
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
                {/* <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" /> */}
                {/* <a href="#">Forgot your password?</a> */}
                <input
                  type="text"
                  name="mobile"
                  placeholder="Email"
                  value={loginformData.mobile}
                  onChange={handleLoginChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={loginformData.password}
                  onChange={handleLoginChange}
                />
                <br></br>
                <button type="submit">Sign In</button>
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1>Welcome Back, Tanisi Admin!</h1>
                  <p>
                    To continue managing your site, please log in with your
                    admin credentials.
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
                  <h1>Hello, Tanisi Admin!</h1>
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
    </>
  );
};

export default Login;
