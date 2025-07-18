"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import "./resume.css";

function Resume() {
  return (
    <div className="container">
      <div className="resume">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="resumecontent">
            <div className="resumecontentheader">
              <h3>Resume</h3>
              <p>
                A quick overview of my technical skills, work experience, and
                education.
              </p>
            </div>

            <div className="resumebody">
              <div className="firstresume">
                <div className="education">
                  <h2>EDUCATION</h2>
                  <h5>
                    Bachelor of Arts in Communication Arts{" "}
                    <strong>April 2024</strong>
                  </h5>
                  <p>University of Uyo, Uyo, Akwa Ibom State, Nigeria.</p>
                </div>
                <div className="cert">
                  <h2>CERTFICATION</h2>
                  <h5>Software Development Bootcamp</h5>
                  <p>GOMYCODE</p>
                </div>
              </div>

              <div className="prof">
                <h2>Professional Experience</h2>
                <h5>Software Developer Intern</h5>
                <h6>GOMYCODE Lagos, Nigeria</h6>
                <p>
                  Developed and deployed full-stack web applications using
                  React, Next.js, Express.js, and MongoDB.
                </p>
                <p>
                  Built responsive user interfaces with Tailwind CSS and ensured
                  seamless user experience across devices.
                </p>
                <p>
                  Created RESTful APIs and implemented backend logic using
                  Express.js and Node.js.
                </p>
                <p>
                  Integrated authentication systems using JWT and handled
                  protected routes in both the frontend and backend.
                </p>
                <p>
                  Collaborated with other trainees in an Agile environment using
                  Git and GitHub for version control.
                </p>
                <p>
                  Completed capstone project showcasing skills in full-stack
                  development, with a focus on clean code and functionality.
                </p>
              </div>
            </div>

            <div className="resumebtn">
              <Link href="https://docs.google.com/document/d/10XEuB7BcD30MqSH1j8NopC1CRWb9UkDh/edit?usp=drive_link&ouid=105650029138463119659&rtpof=true&sd=true">
                View Resume
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default Resume;
