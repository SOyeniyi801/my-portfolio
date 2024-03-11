import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-link-container">
        <div>
          <img src="./assets/logo.svg" alt="Logoipsum" className="logo" />
        </div>
        <div className="footer-items">
          <ul>
            <li>
              <Link
                activeClass="navbar-active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="text-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar-active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="text-md"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar-active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="text-md"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar-active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="text-md"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar-active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="testimonial"
                className="text-md"
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-social-icon">
          <ul>
          <li>
              <a
                href="https://www.linkedin.com/in/samantha-oyeniyi-6384705a"
                className="navbar-content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.33341 4.65479H26.0001C27.4729 4.65479 28.6667 5.84869 28.6667 7.32145V25.9881C28.6667 27.4609 27.4729 28.6548 26.0001 28.6548H7.33341C5.86065 28.6548 4.66675 27.4609 4.66675 25.9881V7.32145C4.66675 5.84869 5.86065 4.65479 7.33341 4.65479ZM11.3334 24.6548C11.7016 24.6548 12.0001 24.3563 12.0001 23.9881V14.6548C12.0001 14.2867 11.7016 13.9881 11.3334 13.9881H9.33342C8.96523 13.9881 8.66675 14.2867 8.66675 14.6548V23.9881C8.66675 24.3563 8.96523 24.6548 9.33342 24.6548H11.3334ZM10.3334 12.6548C9.22884 12.6548 8.33341 11.7594 8.33341 10.6548C8.33341 9.55021 9.22884 8.65479 10.3334 8.65479C11.438 8.65479 12.3334 9.55021 12.3334 10.6548C12.3334 11.7594 11.438 12.6548 10.3334 12.6548ZM24.0001 24.6548C24.3682 24.6548 24.6667 24.3563 24.6667 23.9881V17.8548C24.7101 15.7359 23.1435 13.9275 21.0401 13.6681C19.5694 13.5338 18.1445 14.2207 17.3334 15.4548V14.6548C17.3334 14.2867 17.0349 13.9881 16.6667 13.9881H14.6667C14.2986 13.9881 14.0001 14.2867 14.0001 14.6548V23.9881C14.0001 24.3563 14.2986 24.6548 14.6667 24.6548H16.6667C17.0349 24.6548 17.3334 24.3563 17.3334 23.9881V18.9881C17.3334 17.8836 18.2289 16.9881 19.3334 16.9881C20.4379 16.9881 21.3334 17.8836 21.3334 18.9881V23.9881C21.3334 24.3563 21.6319 24.6548 22.0001 24.6548H24.0001Z"
                    fill="black"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/SOyeniyi801"
                className="navbar-content"
                target="_blank"
                rel="noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path d="M12 0C5.383 0 0 5.383 0 12c0 5.303 3.438 9.8 8.21 11.386.6.11.793-.258.793-.577 0-.285-.01-1.04-.015-2.04-3.348.726-4.042-1.613-4.042-1.613-.546-1.385-1.332-1.755-1.332-1.755-1.088-.743.083-.728.083-.728 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.81 1.305 3.495.997.108-.77.417-1.3.76-1.6-2.665-.3-5.466-1.332-5.466-5.93 0-1.313.47-2.38 1.236-3.22-.126-.303-.536-1.524.116-3.176 0 0 1.007-.322 3.3 1.23a11.38 11.38 0 012.99-.403c1.013.007 2.035.136 2.99.403 2.29-1.553 3.295-1.23 3.295-1.23.654 1.652.244 2.873.118 3.176.77.84 1.234 1.907 1.234 3.22 0 4.61-2.807 5.627-5.48 5.922.43.372.818 1.103.818 2.222 0 1.605-.015 2.896-.015 3.287 0 .32.19.695.8.575C20.566 21.796 24 17.3 24 12c0-6.617-5.383-12-12-12z"/>
                </svg>

              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer-content-container">
        <p className="footer-content">Made with 💖 by Sammi</p>
        <div className="footer-social-icon">
          <ul>
            <li>
              <Link
                activeClass="navbar-active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Privacy_Policy"
                className="text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar-active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Terms_of_Service"
                className="text-sm"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar-active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Cookies_Settings"
                className="text-sm"
              >
                Cookies Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
