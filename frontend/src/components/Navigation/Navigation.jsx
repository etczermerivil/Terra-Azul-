import { NavLink, useLocation } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import logo from "/Images/Logo2.png";

function Navigation() {
  const location = useLocation();

  // Check if the current page is the home page ("/")
  const isHomePage = location.pathname === "/";

  return (
    <header className={`navigation-header ${isHomePage ? "transparent" : "solid"}`}>
      <div className="navigation-container">
        {/* Logo Section */}
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="Terra Azul Tech Logo" className="logo-image" />
          </NavLink>
        </div>

        {/* Navigation Links Section */}
        <nav className="nav-links">
          <ul>
            <li>
              <NavLink to="/" exact="true" activeclassname="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeclassname="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeclassname="active">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/technology" activeclassname="active">
                Our Technology
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Profile Button Section */}
        <div className="profile-button">
          <ProfileButton />
        </div>
      </div>
    </header>
  );

}

export default Navigation;
