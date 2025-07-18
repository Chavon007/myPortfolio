"use client";
import { motion } from "framer-motion";
import Projectcard from "../projectcard/projectcard";

import "./project.css";

function Project() {
  return (
    <div className="container">
      <div className="projects">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="project-content">
            <div className="project-content-header">
              <h2>Projects</h2>
              <p>What I’ve Been Building</p>
            </div>

            <div className="mainprojectcard">
              <Projectcard />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default Project;
