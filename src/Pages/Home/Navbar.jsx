import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
    const [navActive, setNaveActive] = useState(false);

    const toggleNav = () => {
        setNaveActive(!navActive)
    };

    const closeMenu = () => {
        setNaveActive(false)
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

    return(
        <nav className={`navbar ${navActive ? 'active' : ''}`}>
            <div>
                <img className="logo" src="./assets/logo.svg" alt="logo" />
            </div>
            <a 
                className={`nav_hamburger ${navActive ? 'active' : ''}`}
                onClick={toggleNav}
            > 
            <span className="nav_hamburger_line"></span>
            <span className="nav_hamburger_line"></span>
            <span className="nav_hamburger_line"></span>
            </a>
            
            <div className={`navbar-items ${navActive ? 'active' : ''}`}>
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
                            >Home</Link>
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
                            >My Skills</Link>
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
                            >About Me</Link>
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
                            >Projects</Link>
                    </li>
                </ul>
            </div>
            <Link
                onClick={closeMenu} 
                activeClass="navbar-active-content"
                spy={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="btn btn-outline-primary"
                > 
                    Contact Me </Link>
        </nav>
        
        
    )
}
export default Navbar;