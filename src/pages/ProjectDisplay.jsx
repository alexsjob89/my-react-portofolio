
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";
import {useNavigate,useParams} from "react-router-dom";
import {ProjectList} from "../helper/ProjectList";
import "../styles/projectDisplay.css";

function ProjectDisplay() {
  const navigate = useNavigate();


  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">

      <h1>{project.name}</h1>



      <a href="https://github.com/alexsjob89?tab=repositories">
        <GitHubIcon />
      </a>

    </div>
  );
}

export default ProjectDisplay;
