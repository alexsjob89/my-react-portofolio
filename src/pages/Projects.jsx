import React from "react";
import ProjectItem from "../components/ProjectItem";
import {ProjectList} from "../helper/ProjectList";
import "../styles/projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return <ProjectItem id={idx} name={project.name} video={project.video} image={project.image} link={project.link}/>;
        })}
      </div>
    </div>
  );
}

export default Projects;
