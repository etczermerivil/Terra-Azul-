import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import logo from "/Images/Logo2.png";

function Navigation() {
  return (
    <header className="navigation-header">
      <div className="navigation-container">
        {/* Logo Section */}

        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="Terra Azul Tech Logo" className="logo-image" />
          </NavLink>
        </div>

        {/* Links Section */}
        <nav className="nav-links">
          <ul>
          <li>
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink to="/" exact activeClassName="active">
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
