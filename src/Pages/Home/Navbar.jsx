import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          window.history.replaceState(null, '', `#${section.id}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-black text-white border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer"
              onClick={closeMenu}
            >
              <img 
                className="h-8 w-auto" 
                src="./assets/sammi-dev-logo-pink.png" 
                alt="Logo" 
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleNav}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <span 
                  className={`absolute block w-6 h-0.5 bg-white transform transition duration-300 ease-in-out ${
                    isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                  }`}
                />
                <span 
                  className={`absolute block w-6 h-0.5 bg-white transform transition duration-300 ease-in-out ${
                    isOpen ? '-rotate-45 translate-y-1.5' : 'translate-y-1'
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex space-x-8">
              {['Home', 'About', 'Services', 'Projects', 'Graphics', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase().replace(' ', '')}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-white hover:text-pink-500 px-3 py-2 text-sm font-medium cursor-pointer transition-colors"
                  activeClass="text-pink-500"
                  onClick={closeMenu}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['Home', 'About', 'Services', 'Projects', 'Graphics', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase().replace(' ', '')}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-white hover:text-pink-500 block px-3 py-2 text-base font-medium cursor-pointer transition-colors"
                activeClass="text-pink-500"
                onClick={closeMenu}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;