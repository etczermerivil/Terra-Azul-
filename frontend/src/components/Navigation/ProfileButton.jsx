import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkLogout } from "../../redux/session";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./ProfileButton.css";

function ProfileButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const adminEmails = ["businessman.merivil@gmail.com", "water@terraazultech.com"];

  const user = useSelector((store) => store.session.user);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (ulRef.current && !ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(thunkLogout());
    setShowMenu(false);
    navigate("/"); // Redirect to home immediately after logout
  };

  return (
    <div className="profile-button-container">
    <button className="profile-icon-button" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} /> {/* ✅ Restored faBars icon */}
      </button>
      {showMenu && (
        <ul className="profile-dropdown" ref={ulRef}>
          {user ? (
            <>
              <li className="profile-item">{user.username}</li>
              <li className="profile-item">{user.email}</li>

              {adminEmails.includes(user?.email) && (
                <li className="profile-item">
                  <a href="/admin/messages">Contact Messages</a>
                </li>
              )}

              <li className="profile-item">
                <button className="logout-button" onClick={logout}>
                  Log Out
                </button>
              </li>
            </>
          ) : (
            <>
              {/* ✅ Open Login Modal instead of navigating */}
              <li className="profile-item">
                <OpenModalMenuItem
                  itemText="Log In"
                  onItemClick={() => setShowMenu(false)}
                  modalComponent={<LoginFormModal />}
                />
              </li>

              {/* ✅ Open Signup Modal instead of navigating */}
              <li className="profile-item">
                <OpenModalMenuItem
                  itemText="Sign Up"
                  onItemClick={() => setShowMenu(false)}
                  modalComponent={<SignupFormModal />}
                />
              </li>
            </>
          )}
        </ul>
      )}
    </div>
  );
}

export default ProfileButton;
