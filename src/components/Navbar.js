import React from "react";
import "../assets/styles/navbar.css";
import IonIcon from "@reacticons/ionicons";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

  return (
    <div>
      <nav id="navbar">
        <ul class="navbar-items flexbox-col">
          <li class="navbar-logo flexbox-left"onClick={navigate("/")}>
            <a class="navbar-item-inner flexbox">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 1438.88 1819.54"
              >
                <polygon points="925.79 318.48 830.56 0 183.51 1384.12 510.41 1178.46 925.79 318.48" />
                <polygon points="1438.88 1663.28 1126.35 948.08 111.98 1586.26 0 1819.54 1020.91 1250.57 1123.78 1471.02 783.64 1663.28 1438.88 1663.28" />
              </svg>
            </a>
          </li>
          <li class="navbar-item flexbox-left" onClick={() => navigate("/jobs")}>
            <a class="navbar-item-inner flexbox-left">
              <div class="navbar-item-inner-icon-wrapper flexbox">
                <IonIcon
                  name="folder-open-outline"
                  style={{ width: "24px", height: "24px" }}
                ></IonIcon>
              </div>
              <span class="link-text">Jobs</span>
            </a>
          </li>
          <li class="navbar-item flexbox-left" >
            <a class="navbar-item-inner flexbox-left" onClick={() => navigate("/users")}>
              <div class="navbar-item-inner-icon-wrapper flexbox">
                <IonIcon
                  name="people-outline"
                  style={{ width: "24px", height: "24px" }}
                ></IonIcon>
              </div>
              <span class="link-text">Users</span>
            </a>
          </li>
          <li class="navbar-item flexbox-left">
            <a class="navbar-item-inner flexbox-left">
              <div class="navbar-item-inner-icon-wrapper flexbox">
                <IonIcon
                  name="chatbubbles-outline"
                  style={{ width: "24px", height: "24px" }}
                ></IonIcon>
              </div>
              <span class="link-text">Messages</span>
            </a>
          </li>
          <li class="navbar-item flexbox-left">
            <a class="navbar-item-inner flexbox-left">
              <div class="navbar-item-inner-icon-wrapper flexbox">
                <IonIcon
                  name="person-outline"
                  style={{ width: "24px", height: "24px" }}
                ></IonIcon>
              </div>
              <span class="link-text">Admin</span>
            </a>
          </li>
        </ul>
      </nav>
      
      {/* <main id="main" class="flexbox-col">
        <h2>Lorem ipsum!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
          corporis, rerum doloremque iste sed voluptates omnis molestias
          molestiae animi recusandae labore sit amet delectus ad necessitatibus
          laudantium qui! Magni quisquam illum quaerat necessitatibus sint
          quibusdam perferendis! Aut ipsam cumque deleniti error perspiciatis
          iusto accusamus consequuntur assumenda. Obcaecati minima sed natus?
        </p>
      </main> */}
    </div>
  );
};

export default Navbar;
