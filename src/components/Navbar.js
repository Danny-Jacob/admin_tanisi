import React from "react";
import "../assets/styles/navbar.css";
import IonIcon from "@reacticons/ionicons";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/Tanisi_Symbol (Colour).svg"

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav class="main-menu">
      <ul>
      <img src={logo} style={{padding:"18px 14px"}}/>
        <li onClick={() => navigate("/jobs")}>
          <a>
            <i class="fa fa-briefcase fa-2x"></i>
            <span class="nav-text">Jobs</span>
          </a>
        </li>
        <li class="has-subnav" onClick={() => navigate("/users")}>
          <a>
            <i class="fa fa-users fa-2x"></i>
            <span class="nav-text">Applicants</span>
          </a>
        </li>
        <li class="has-subnav" onClick={() => navigate("/messages")}>
          <a>
            <i class="fa fa-envelope fa-2x"></i>
            <span class="nav-text">Connections</span>
          </a>
        </li>
        <li class="has-subnav" onClick={() => navigate("/admin")}>
                    <a>
                       <i class="fa fa-user fa-2x"></i>
                       {/* <i class="fa-solid fa-user-tie fa-flip"></i> */}
                        <span class="nav-text">
                            Admins
                        </span>
                    </a>
                    
                </li>
      </ul>

      <ul class="logout">
        <li
          onClick={() => {
            localStorage.removeItem("accessToken");
            navigate("/");
          }}
        >
          <a>
            <i class="fa fa-power-off fa-2x"></i>
            <span class="nav-text">Logout</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
