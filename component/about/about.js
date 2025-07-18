"use client";
import { motion } from "framer-motion";
import { FaGreaterThan } from "react-icons/fa6";
import Skills from "../skills/skill";
import "./about.css";
function About() {
  return (
    <div className="container">
      <div className="about">
        <div className="aboutcontent">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="aboutcontent-header">
              <h2>About me</h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="aboutcontent-writeup">
              <div className="aboutcontent-writeup1">
                <h2>Full-Stack Web Developer</h2>
                <p>
                  I am Salvation, a Full-Stack Web Developer who doesn’t just
                  write code. I architect, build, and ship high-performance web
                  solutions that speak for themselves.
                </p>{" "}
                <p>
                  With hands-on experience in HTML, CSS, JavaScript, TypeScript,
                  React, Next.js, Node.js, Express, and MongoDB, I build
                  full-stack applications that are clean, scalable, and fast. I
                  specialize in turning complex ideas into responsive,
                  functional, and user-driven digital experiences.
                </p>{" "}
                <p>
                  Every project I touch is built with precision, bold energy,
                  and zero shortcuts. I work across the stack with confidence,
                  from API architecture to pixel-perfect frontends.
                </p>
              </div>

              <div className="aboutcontent-writeup2">
                <h2>Personal Info</h2>
                <p>
                  {" "}
                  <FaGreaterThan />
                  <span>
                    Phone: <small>+2348131933895</small>
                  </span>
                </p>
                <p>
                  {" "}
                  <FaGreaterThan />
                  <span>
                    City: <small>Lagos, Nigeria.</small>
                  </span>
                </p>
                <p>
                  {" "}
                  <FaGreaterThan />
                  <span>
                    Email: <small>salvationazuh@gmail.com</small>
                  </span>
                </p>
                <p>
                  {" "}
                  <FaGreaterThan />
                  <span>
                    Freelance: <small>Available</small>
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mainskills">
              <Skills />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="whatIDo">
              <h2>What I Do</h2>
              <ul>
                <li>
                  <span>
                    <FaGreaterThan />
                  </span>{" "}
                  Frontend Development:
                  <small>
                    I build modern, dynamic, and responsive UIs from scratch
                    using HTML, CSS, JavaScript, TypeScript, React, Next.js, and
                    Tailwind CSS.
                  </small>
                </li>
                <li>
                  <span>
                    <FaGreaterThan />
                  </span>{" "}
                  Backend Development:
                  <small>
                    I develop fast, secure, and scalable server-side
                    applications using Node.js, Express, and MongoDB.
                  </small>
                </li>
                <li>
                  <span>
                    <FaGreaterThan />
                  </span>{" "}
                  Full-Stack Integration:
                  <small>
                    Building seamless connections between frontend and backend
                  </small>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
export default About;
