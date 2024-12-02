import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);

  
  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const toggleDropdown = () => {
    setDropdownActive((prevState) => !prevState);
    setNavActive(true); // Ensure the menu stays open when interacting with the dropdown
  };
  

  const closeMenu = () => {
    setNavActive(false);
    setDropdownActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <Link
          onClick={closeMenu}
          activeClass="navbar-active-content"
          spy={true}
          offset={-70}
          duration={500}
          to="heroSection"
          className="navbar-content"
        >
          <img className="logo" src="./assets/SammiDevLogo.png" alt="logo" />
        </Link>
      </div>
      <button
        className={`nav_hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav_hamburger_line"></span>
        <span className="nav_hamburger_line"></span>
      </button>

      <div className={`navbar-items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active-content"
              spy={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar-content"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active-content"
              spy={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar-content"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active-content"
              spy={true}
              offset={-70}
              duration={500}
              to="mySkills"
              className="navbar-content"
            >
              Services
            </Link>
          </li>

          {/* Projects with Dropdown */}
          <li className="dropdown">
  <span
    className={`navbar-content dropdown-toggle ${
      dropdownActive ? "active" : ""
    }`}
    onClick={toggleDropdown}
  >
    Projects <span className="caret">{dropdownActive ? "▲" : "▼"}</span>
  </span>
  <ul className={`dropdown-menu ${dropdownActive ? "active" : ""}`}>
    <li>
      <Link
        onClick={closeMenu}
        activeClass="navbar-active-content"
        spy={true}
        offset={-70}
        duration={500}
        to="MyProjects"
        className="navbar-content"
      >
        Portfolio Projects
      </Link>
    </li>
    <li>
      <Link
        onClick={closeMenu}
        activeClass="navbar-active-content"
        spy={true}
        offset={-70}
        duration={500}
        to="graphics-section"
        className="navbar-content"
      >
        Social Media Graphics
      </Link>
    </li>
    <li>
      <Link
        onClick={closeMenu}
        activeClass="navbar-active-content"
        spy={true}
        offset={-70}
        duration={500}
        to="videos-section"
        className="navbar-content"
      >
        Video Editing
      </Link>
    </li>
  </ul>
</li>

          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Contact"
              className="navbar-content"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
