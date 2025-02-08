import { NavLink, useLocation } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import logo from "/Images/Logo2.png";

function Navigation() {
  const location = useLocation();

  // Check if the current page is the home page ("/") or the services page ("/services")
  // const isHomePage = location.pathname === "/";
  const isServicesPage = location.pathname === "/services";
  const isInvestorsPage = location.pathname === "/investors";
  const isContactPage = location.pathname === "/contact";
  const isAboutPage = location.pathname === "/about";


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
          ? "about-active" // Apply the about-active class for About Us page
          : "solid"
      }`}
    >
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
              <NavLink to="/services" activeclassname="active">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/technology" activeclassname="active">
                Technology
              </NavLink>
            </li>
            <li>
              <NavLink to="/investors" activeclassname="active">
                Investors
              </NavLink>
            </li>
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
              ? "about-profile" // Apply about-specific profile class
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
