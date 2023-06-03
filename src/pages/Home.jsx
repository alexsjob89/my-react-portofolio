import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import {AiOutlineMail,AiOutlinePhone} from "react-icons/ai";
import Photo from "../assests/Photo on 24.05.2023 at 18.37.jpg";


import {Link} from "react-router-dom";

import "../styles/home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, my name is Alex</h2>
        <div className="prompt">
          <p>A software Developer with a passion for learning and creating</p>
          <a href="https://www.linkedin.com/feed/">
            <LinkedInIcon />
          </a>

          <Link to="/ContactUs">
            <EmailIcon />
          </Link>

          <Link to="https://github.com/alexsjob89?tab=repositories">
            <GitHubIcon />
          </Link>
          <div className="profile">
        <h1></h1>
        <img src={Photo} alt="" width={200}/>
        <h4><span>Name:</span>Alexandru Dorultan</h4>
        <p><AiOutlinePhone size={25} style={{marginRight: "10px", marginBottom:"-7px"}}/>07565883908</p>
<p><AiOutlineMail size={25} style={{marginRight: "10px", marginBottom:"-7px"}}/>alexandru.dorultan@live.com</p>
<p><span>Address:</span>Beckton, London ,United Kingdom</p>

      </div>
        </div>
      </div>



    </div>
  );
}

export default Home;
