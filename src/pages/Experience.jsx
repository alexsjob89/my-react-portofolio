import SchoolIcon from "@mui/icons-material/School";
import React from "react";
import {FcPackage} from "react-icons/fc";
import {GiSkills,GiStairsGoal} from "react-icons/gi";
import {GrProjects} from "react-icons/gr";
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


function Experience() {
  return (
    <div className="experience" style={{marginTop: "7.4rem"}}>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement className="vertical-timeline-element--education" date="2005 -2008" iconStyle={{ background: "#3e497a", color: "white" }} icon={<SchoolIcon />}>
          <h3 className="vertical-timeline-title">Education Hight School, Place Romania</h3>
          <p>Hight School Diploma</p>
        </VerticalTimelineElement>

        {/* work element */}
        <VerticalTimelineElement className="vertical-timeline-element--work" date="2022 -2023" iconStyle={{ background: "yellow", color: "black" }} icon={<GiSkills/>}>
          <h3 className="vertical-timeline-title">Skills</h3>
          <p>Programming:  JavaScript
<br/>Web Development: HTML5, CSS3, JavaScript, React
<br/>Problem-solving skills
<br/>Understanding of data structures and algorithms
Software development methodologies
<br/>Lnguage: Fluent in English.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--work" date="2022 -2023" iconStyle={{ background: "blue", backgroundColor: "grey", color: "white"}} icon={<GrProjects/>}>
        E-commerce Website:Designed and developed a mock e-commerce website using HTML, CSS, and JavaScript. Included features such as a shopping cart and user authentication.
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--work" date="2022 -2023" iconStyle={{ background: "blue", backgroundColor: "red", color: "white"}} icon={<FcPackage/>}>
        Personal Traits<br/>

Strong analytical thinking and problem-solving capabilities
Excellent team player and communicator
Quick learner and keen to learn new technologies
Committed to maintaining up-to-date industry knowledge and IT skills
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--work" date="2022 -2023" iconStyle={{ background: "blue", backgroundColor: "skyblue", color: "black"}} icon={<GiStairsGoal/>}>
        Goal<br/>

Aspire to grow with a company where I can continue to learn, take on additional responsibilities, and contribute as much value as possible to the team. I'm passionate about applying my coding skills and my ability to work well in a team to create software that meets user needs and business objectives. Interested in embarking on projects related to artificial intelligence and machine learning, and leveraging my multilingual skills in a global team setting.
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
