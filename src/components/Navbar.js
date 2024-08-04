import React from "react";
import "../assets/styles/navbar.css";
import IonIcon from "@reacticons/ionicons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav class="main-menu">
      <ul>
        <li onClick={() => navigate("/jobs")}>
          <a>
            <i class="fa fa-briefcase fa-2x"></i>
            <span class="nav-text">Jobs</span>
          </a>
        </li>
        <li class="has-subnav" onClick={() => navigate("/users")}>
          <a>
            <i class="fa fa-users fa-2x"></i>
            <span class="nav-text">Users</span>
          </a>
        </li>
        <li class="has-subnav" onClick={() => navigate("/messages")}>
          <a>
            <i class="fa fa-envelope fa-2x"></i>
            <span class="nav-text">Message</span>
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
