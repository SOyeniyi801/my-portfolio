import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNaveActive] = useState(false);

  const toggleNav = () => {
    setNaveActive(!navActive);
  };

  const closeMenu = () => {
    setNaveActive(false);
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
        <img className="logo" src="./assets/logo.svg" alt="logo" />
      </div>
      <a
        className={`nav_hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav_hamburger_line"></span>
        <span className="nav_hamburger_line"></span>
      </a>

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
              to="mySkills"
              className="navbar-content"
            >
              My Skills
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
              to="MyProjects"
              className="navbar-content"
            >
              Projects
            </Link>
          </li>
          <li>
            <a
              href="http://www.devdiariesbysammi.com"
              activeClass="navbar-active-content"
              className="navbar-content"
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
          </li>
        </ul>
      </div>
      <a
        href="https://samanthaoyeniyiresume.my.canva.site/online-resume"
        target="_blank"
        rel="noopener noreferrer"
        onClick={closeMenu}
        className="btn btn-outline-primary"
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
      >
        My Resume
      </a>
    </nav>
  );
}
export default Navbar;
