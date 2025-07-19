"use client";

import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const pathname = usePathname();
  return (
    <div className="container">
      <div className="header">
        <div className="nav">
          <div className="nav-header">
            <Link href="/">Chavon</Link>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <IoClose size={24} /> : <RxHamburgerMenu size={24} />}
          </div>
          <div className={`navbar ${menuOpen ? "show" : "hide"}`}>
            <ul>
              <li>
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  <span
                    className={`${
                      pathname === "/" ? "text-[#34b7a7]" : "text-[#5d5d5c]"
                    }`}
                  >
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setMenuOpen(false)}>
                  <span
                    className={`${
                      pathname.startsWith("/about")
                        ? "text-[#34b7a7]"
                        : "text-[#5d5d5c]"
                    }`}
                  >
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/resume" onClick={() => setMenuOpen(false)}>
                  <span
                    className={`${
                      pathname.startsWith("/resume")
                        ? "text-[#34b7a7]"
                        : "text-[#5d5d5c]"
                    }`}
                  >
                    Resume
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/project" onClick={() => setMenuOpen(false)}>
                  <span
                    className={`${
                      pathname.startsWith("/project")
                        ? "text-[#34b7a7]"
                        : "text-[#5d5d5c]"
                    }`}
                  >
                    Projects
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setMenuOpen(false)}>
                  <span
                    className={`${
                      pathname.startsWith("/contact")
                        ? "text-[#34b7a7]"
                        : "text-[#5d5d5c]"
                    }`}
                  >
                    {" "}
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="nav-socials">
            <Link href="https://www.instagram.com/official_chavon/">
              <FaInstagram />
            </Link>
            <Link href="https://x.com/salvationazuh">
              <FaXTwitter />
            </Link>
            <Link href="https://www.linkedin.com/in/salvation-azuh/">
              <FaLinkedinIn />
            </Link>
            <Link href="https://wa.me/2348131933895">
              <FaWhatsapp />
            </Link>
            <Link href="https://web.facebook.com/azuh.salvation.1/">
              <FaFacebookF />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
