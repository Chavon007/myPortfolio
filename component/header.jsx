"use client";


import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
function Header() {
  const pathname = usePathname();
  return (
    <div className="container">
      <div className="header">
        <div className="nav">
          <div className="nav-header">
            <h2>Chavon</h2>
          </div>

          <div className="navbar">
            <ul>
              <li>
                <Link href="/">
                  {" "}
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
                <Link href="/about">
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
                <Link href="/resume">
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
                <Link href="/project">
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
                <Link href="/contact">
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
