import React,{useState} from "react";



function ProjectItem({ video, name, id, image, link }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
   <a href={link} > <div className="projectItem"   onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)} >
    {isHovered ? (
  <video src={video} autoPlay muted loop style={{width:"300px", height: "300px"}}></video>
  ) : (<img src={image} style={{width: "300px", height:"300px"}}/>)}


      <h1>{name}</h1>
    </div></a>
  );
}

export default ProjectItem;
