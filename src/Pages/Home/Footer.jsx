import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
<footer className="bg-black text-white py-8">
  <div className="max-w-6xl mx-auto px-6">
    <div className="flex flex-col md:flex-row items-center justify-between mb-8">
      {/* Logo */}
      <div>
        <img
          src="./assets/sammi-dev-logo-pink.png"
          alt="Sammi Dev Logo"
          className="h-12 w-auto"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6 mt-4 md:mt-0">
        <ul className="flex space-x-4 font-open-sans text-sm">
          <li>
            <Link
              to="home"
              className="hover:text-pink-500 transition-colors"
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              className="hover:text-pink-500 transition-colors"
              smooth={true}
              offset={-70}
              duration={500}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              className="hover:text-pink-500 transition-colors"
              smooth={true}
              offset={-70}
              duration={500}
            >
              Web Design
            </Link>
          </li>
          <li>
            <Link
              to="graphics"
              className="hover:text-pink-500 transition-colors"
              smooth={true}
              offset={-70}
              duration={500}
            >
              Graphics
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className="hover:text-pink-500 transition-colors"
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a
          href="https://www.linkedin.com/in/samantha-oyeniyi-6384705a"
          target="_blank"
          rel="noreferrer"
          className="hover:text-pink-500 transition-colors"
        >
          {/* LinkedIn Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 33 33"
          >
            <path d="..." />
          </svg>
        </a>
        <a
          href="https://github.com/SOyeniyi801"
          target="_blank"
          rel="noreferrer"
          className="hover:text-pink-500 transition-colors"
        >
          {/* GitHub Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="..." />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/sammi.the.dev/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-pink-500 transition-colors"
        >
          {/* Instagram Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="..." />
          </svg>
        </a>
        <a
          href="https://www.tiktok.com/@sammi.the.dev"
          target="_blank"
          rel="noreferrer"
          className="hover:text-pink-500 transition-colors"
        >
          {/* TikTok Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="..." />
          </svg>
        </a>
      </div>
    </div>

    <hr className="border-gray-700 my-6" />

    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      <p className="font-open-sans text-sm">
        Made with 💖 by Sammi
      </p>
      <ul className="flex space-x-4 text-sm font-open-sans">
        <li>
          <Link
            to="Privacy_Policy"
            className="hover:text-pink-500 transition-colors"
            smooth={true}
            offset={-70}
            duration={500}
          >
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link
            to="Terms_of_Service"
            className="hover:text-pink-500 transition-colors"
            smooth={true}
            offset={-70}
            duration={500}
          >
            Terms of Service
          </Link>
        </li>
        <li>
          <Link
            to="Cookies_Settings"
            className="hover:text-pink-500 transition-colors"
            smooth={true}
            offset={-70}
            duration={500}
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
