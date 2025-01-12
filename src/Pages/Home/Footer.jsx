import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
//     <footer className="footer-container">
//       <div className="footer-link-container">
//         <div>
//           <img
//             src="./assets/SammiDevLogo.png"
//             alt="Logoipsum"
//             className="logo"
//           />
//         </div>
//         <div className="footer-items">
//           <ul>
//             <li>
//               <Link
//                 activeClass="navbar-active-content"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//                 to="heroSection"
//                 className="text-md"
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 activeClass="navbar-active-content"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//                 to="MyProjects"
//                 className="text-md"
//               >
//                 Projects
//               </Link>
//             </li>
//             <li>
//               <Link
//                 activeClass="navbar-active-content"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//                 to="AboutMe"
//                 className="text-md"
//               >
//                 About Me
//               </Link>
//             </li>
//             <li>
//               <Link
//                 activeClass="navbar-active-content"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//                 to="Contact"
//                 className="text-md"
//               >
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div className="footer-social-icon">
//           <ul>
//             <li>
//               <a
//                 href="https://www.linkedin.com/in/samantha-oyeniyi-6384705a"
//                 className="navbar-content"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="32"
//                   height="32"
//                   viewBox="0 0 33 33"
//                   fill="none"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M7.33341 4.65479H26.0001C27.4729 4.65479 28.6667 5.84869 28.6667 7.32145V25.9881C28.6667 27.4609 27.4729 28.6548 26.0001 28.6548H7.33341C5.86065 28.6548 4.66675 27.4609 4.66675 25.9881V7.32145C4.66675 5.84869 5.86065 4.65479 7.33341 4.65479ZM11.3334 24.6548C11.7016 24.6548 12.0001 24.3563 12.0001 23.9881V14.6548C12.0001 14.2867 11.7016 13.9881 11.3334 13.9881H9.33342C8.96523 13.9881 8.66675 14.2867 8.66675 14.6548V23.9881C8.66675 24.3563 8.96523 24.6548 9.33342 24.6548H11.3334ZM10.3334 12.6548C9.22884 12.6548 8.33341 11.7594 8.33341 10.6548C8.33341 9.55021 9.22884 8.65479 10.3334 8.65479C11.438 8.65479 12.3334 9.55021 12.3334 10.6548C12.3334 11.7594 11.438 12.6548 10.3334 12.6548ZM24.0001 24.6548C24.3682 24.6548 24.6667 24.3563 24.6667 23.9881V17.8548C24.7101 15.7359 23.1435 13.9275 21.0401 13.6681C19.5694 13.5338 18.1445 14.2207 17.3334 15.4548V14.6548C17.3334 14.2867 17.0349 13.9881 16.6667 13.9881H14.6667C14.2986 13.9881 14.0001 14.2867 14.0001 14.6548V23.9881C14.0001 24.3563 14.2986 24.6548 14.6667 24.6548H16.6667C17.0349 24.6548 17.3334 24.3563 17.3334 23.9881V18.9881C17.3334 17.8836 18.2289 16.9881 19.3334 16.9881C20.4379 16.9881 21.3334 17.8836 21.3334 18.9881V23.9881C21.3334 24.3563 21.6319 24.6548 22.0001 24.6548H24.0001Z"
//                     fill="black"
//                   />
//                 </svg>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://github.com/SOyeniyi801"
//                 className="navbar-content"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="32"
//                   height="32"
//                   viewBox="0 0 24 24"
//                 >
//                   <path fill="none" d="M0 0h24v24H0z" />
//                   <path d="M12 0C5.383 0 0 5.383 0 12c0 5.303 3.438 9.8 8.21 11.386.6.11.793-.258.793-.577 0-.285-.01-1.04-.015-2.04-3.348.726-4.042-1.613-4.042-1.613-.546-1.385-1.332-1.755-1.332-1.755-1.088-.743.083-.728.083-.728 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.81 1.305 3.495.997.108-.77.417-1.3.76-1.6-2.665-.3-5.466-1.332-5.466-5.93 0-1.313.47-2.38 1.236-3.22-.126-.303-.536-1.524.116-3.176 0 0 1.007-.322 3.3 1.23a11.38 11.38 0 012.99-.403c1.013.007 2.035.136 2.99.403 2.29-1.553 3.295-1.23 3.295-1.23.654 1.652.244 2.873.118 3.176.77.84 1.234 1.907 1.234 3.22 0 4.61-2.807 5.627-5.48 5.922.43.372.818 1.103.818 2.222 0 1.605-.015 2.896-.015 3.287 0 .32.19.695.8.575C20.566 21.796 24 17.3 24 12c0-6.617-5.383-12-12-12z" />
//                 </svg>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.instagram.com/sammi.the.dev/?igsh=eG4xbmx4YW82Y3Nh&utm_source=qr"
//                 className="navbar-content"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <svg
//                   width="35"
//                   height="35"
//                   viewBox="0 0 158 158"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M79.1034 0.131042H78.7446C35.3306 0.131042 0.136597 35.3354 0.136597 78.7622V79.1211C0.136597 122.548 35.3306 157.752 78.7446 157.752H79.1034C122.517 157.752 157.711 122.548 157.711 79.1211V78.7622C157.711 35.3354 122.517 0.131042 79.1034 0.131042Z"
//                     fill="#1E1E1E"
//                   />
//                   <path
//                     d="M103.306 32.1987L54.5477 32.1987C41.0774 32.1987 30.119 43.1603 30.119 56.6346L30.119 101.254C30.119 114.728 41.0774 125.69 54.5477 125.69H103.306C116.776 125.69 127.734 114.728 127.734 101.254V56.6346C127.734 43.1603 116.776 32.1987 103.306 32.1987ZM38.7367 56.6346C38.7367 47.915 45.8306 40.8189 54.5477 40.8189H103.306C112.023 40.8189 119.117 47.915 119.117 56.6346V101.254C119.117 109.974 112.023 117.07 103.306 117.07H54.5477C45.8306 117.07 38.7367 109.974 38.7367 101.254V56.6346Z"
//                     fill="white"
//                   />
//                   <path
//                     d="M78.9269 101.668C91.4531 101.668 101.65 91.4743 101.65 78.9389C101.65 66.4034 91.4587 56.2094 78.9269 56.2094C66.3951 56.2094 56.204 66.4034 56.204 78.9389C56.204 91.4743 66.3951 101.668 78.9269 101.668ZM78.9269 64.8351C86.7054 64.8351 93.032 71.1636 93.032 78.9444C93.032 86.7252 86.7054 93.0537 78.9269 93.0537C71.1483 93.0537 64.8217 86.7252 64.8217 78.9444C64.8217 71.1636 71.1483 64.8351 78.9269 64.8351Z"
//                     fill="white"
//                   />
//                   <path
//                     d="M103.753 59.8816C107.126 59.8816 109.875 57.1371 109.875 53.7575C109.875 50.3779 107.132 47.6333 103.753 47.6333C100.374 47.6333 97.6307 50.3779 97.6307 53.7575C97.6307 57.1371 100.374 59.8816 103.753 59.8816Z"
//                     fill="white"
//                   />
//                 </svg>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.tiktok.com/@sammi.the.dev?_t=8p4GcgOm0vS&_r=1"
//                 className="navbar-content"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <svg width="35" height="35" viewBox="0 0 159 159" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M79.8946 0.92749H79.5357C36.1218 0.92749 0.927765 36.1319 0.927765 79.5586V79.9175C0.927765 123.344 36.1218 158.549 79.5357 158.549H79.8946C123.309 158.549 158.503 123.344 158.503 79.9175V79.5586C158.503 36.1319 123.309 0.92749 79.8946 0.92749Z" fill="#1E1E1E"/>
// <path d="M117.805 57.9501V72.8325C115.204 72.5785 111.826 71.9877 108.088 70.6181C103.208 68.8289 99.5755 66.3826 97.1961 64.4884V94.5681L97.1354 94.4742C97.174 95.0706 97.1961 95.6781 97.1961 96.291C97.1961 111.229 85.0453 123.389 70.1065 123.389C55.1677 123.389 43.0168 111.229 43.0168 96.291C43.0168 81.3534 55.1677 69.1879 70.1065 69.1879C71.5694 69.1879 73.0048 69.3038 74.4071 69.5303V84.1973C73.06 83.7169 71.6136 83.4574 70.1065 83.4574C63.0346 83.4574 57.2766 89.2115 57.2766 96.291C57.2766 103.371 63.0346 109.125 70.1065 109.125C77.1784 109.125 82.9364 103.365 82.9364 96.291C82.9364 96.026 82.9309 95.7609 82.9143 95.4958V37.0429H97.7813C97.8365 38.302 97.8862 39.5721 97.9414 40.8312C98.0408 43.3107 98.9241 45.6907 100.464 47.6401C102.27 49.9318 104.936 52.5935 108.679 54.7196C112.185 56.7021 115.475 57.558 117.805 57.9612V57.9501Z" fill="white"/>
// </svg>

//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <hr className="divider" />
//       <div className="footer-content-container">
//         <p className="footer-content">Made with 💖 by Sammi</p>
//         <div className="footer-social-icon">
//           <ul>
//             <li>
//               <Link
//                 activeClass="navbar-active-content"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//                 to="Privacy_Policy"
//                 className="text-sm"
//               >
//                 Privacy Policy
//               </Link>
//             </li>
//             <li>
//               <Link
//                 activeClass="navbar-active-content"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//                 to="Terms_of_Service"
//                 className="text-sm"
//               >
//                 Terms of Service
//               </Link>
//             </li>
//             <li>
//               <Link
//                 activeClass="navbar-active-content"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//                 to="Cookies_Settings"
//                 className="text-sm"
//               >
//                 Cookies Settings
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </footer>

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
              to="heroSection"
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
              to="MyProjects"
              className="hover:text-pink-500 transition-colors"
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="AboutMe"
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
              to="Contact"
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
