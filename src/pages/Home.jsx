import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, my name is Alex</h2>
        <div className="prompt">
          <p>A software Developer with a passion for learning and creating</p>
          <LinkedInIcon />
          <EmailIcon />
          <Link to="https://github.com/alexsjob89?tab=repositories">
            <GitHubIcon />
          </Link>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
      </div>
      <ol className="list">
        <li className="item">
          <h2>Front-End</h2>
          <span>React.js, javaScript, HTML, CSS</span>
        </li>
      </ol>
    </div>
  );
}

export default Home;
