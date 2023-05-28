
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";
import {useParams} from "react-router-dom";
import {ProjectList} from "../helper/ProjectList";
import "../styles/projectDisplay.css";

function ProjectDisplay() {




  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project" >
    <img src={project.image} alt={project.name} style={{width: "300px", height:"300px"}}/>


      <h1>{project.name}</h1>



      <a href="https://github.com/alexsjob89?tab=repositories">
        <GitHubIcon />
      </a>

    </div>
  );
}

export default ProjectDisplay;
