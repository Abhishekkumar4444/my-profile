"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EDUCATION", href: "#education" },
  { label: "BLOGS", href: "#blogs" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((link) => document.getElementById(link.href.substring(1)));
      
      let currentActive = "";
      
      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          // Highlight if the top of the section is at or above the navbar area
          // and the bottom of the section is below the navbar area
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentActive = `#${section.id}`;
          }
        }
      });

      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check on load
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-[100] backdrop-blur-xl bg-[#0d1224]/70 border-b border-transparent"
      style={{
        borderImage: "linear-gradient(90deg, transparent, rgba(139,92,246,0.3), rgba(236,72,153,0.3), rgba(22,242,179,0.3), transparent) 1",
      }}
    >
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] flex flex-wrap items-center justify-between py-4">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="text-3xl font-bold gradient-text tracking-tight hover:opacity-80 transition-opacity duration-300">
            ABHISHEK KUMAR
          </Link>
        </div>

        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-10 h-10 text-pink-500 hover:text-[#16f2b3] focus:outline-none flex items-center justify-center transition-colors duration-300"
          >
            <MdMenu size={32} className={`absolute transition-all duration-500 ease-in-out ${isOpen ? 'opacity-0 scale-50 rotate-90' : 'opacity-100 scale-100 rotate-0'}`} />
            <MdClose size={32} className={`absolute transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-90'}`} />
          </button>
        </div>

        <ul
          className={`${
            isOpen
              ? "max-h-[400px] opacity-100 mt-4 glass-card p-4 translate-y-0 pointer-events-auto"
              : "max-h-0 opacity-0 m-0 p-0 -translate-y-5 pointer-events-none"
          } flex w-full flex-col items-start text-sm transition-all duration-500 ease-in-out lg:mt-0 lg:h-auto lg:max-h-screen lg:w-auto lg:flex-row lg:space-x-1 lg:border-0 lg:opacity-100 lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:shadow-none lg:overflow-visible lg:rounded-none lg:translate-y-0 lg:pointer-events-auto`}
          id="navbar-default"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="w-full lg:w-auto">
              <a
                className={`block no-underline outline-none hover:no-underline w-full nav-link ${
                  activeSection === link.href ? "bg-[rgba(139,92,246,0.12)]" : ""
                }`}
                href={link.href}
                onClick={closeMenu}
              >
                <span className={`text-sm transition-colors duration-300 tracking-wider font-medium ${
                  activeSection === link.href ? "text-[var(--accent-teal)]" : "text-gray-300"
                }`}>
                  {link.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
