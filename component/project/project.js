import Projectcard from "../projectcard/projectcard";
import "./project.css";

function Project() {
  return (
    <div className="container">
      <div className="projects">
        <div className="project-content">
          <div className="project-content-header">
            <h2>Projects</h2>
            <p>What I’ve Been Building</p>
          </div>

          <div className="mainprojectcard">
            <Projectcard />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
