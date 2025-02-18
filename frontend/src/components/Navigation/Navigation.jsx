import { NavLink, useLocation } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import logo from "/Images/Logo2.png";

function Navigation() {
  const location = useLocation();

  // Active page checks
  const isServicesPage = location.pathname === "/services";
  const isInvestorsPage = location.pathname === "/investors";
  const isContactPage = location.pathname === "/contact";
  const isAboutPage = location.pathname === "/about";
  const isAdminMessagesPage = location.pathname === "/admin/messages"; // New active check

  return (
    <header
      className={`navigation-header ${
        isServicesPage
          ? "services-active"
          : isInvestorsPage
          ? "investors-active"
          : isContactPage
          ? "contact-active"
          : isAboutPage
          ? "about-active"
          : isAdminMessagesPage
          ? "admin-messages-active" // New class for admin messages
          : "solid"
      }`}
    >
      <div className="navigation-container">
        {/* Logo Section */}
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="Terra Azul Tech Logo" className="logo-image" loading="lazy" />
          </NavLink>
        </div>

        {/* Navigation Links Section */}
        <nav className="nav-links">
          <ul>
            <li>
              <NavLink to="/" exact="true" activeclassname="active" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeclassname="active" className="nav-link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeclassname="active" className="nav-link">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" activeclassname="active" className="nav-link">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/technology" activeclassname="active" className="nav-link">
                Technology
              </NavLink>
            </li>
            <li>
              <NavLink to="/investors" activeclassname="active" className="nav-link">
                Investors
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/admin/messages" activeclassname="active" className="nav-link admin-active">
                Dashboard
              </NavLink>
            </li> */}
          </ul>
        </nav>

        {/* Profile Button Section */}
        <div
          className={`profile-button ${
            isServicesPage
              ? "services-profile"
              : isInvestorsPage
              ? "investors-profile"
              : isContactPage
              ? "contact-profile"
              : isAboutPage
              ? "about-profile"
              : isAdminMessagesPage
              ? "admin-profile" // New class for admin messages
              : ""
          }`}
        >
          <ProfileButton />
        </div>
      </div>
    </header>
  );
}

export default Navigation;
