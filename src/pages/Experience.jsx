import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement className="vertical-timeline-element--education" date="2005 -2008" iconStyle={{ background: "#3e497a", color: "#fff" }} icon={<SchoolIcon />}>
          <h3 className="vertical-timeline-title">Education Hight School, Place Romania</h3>
          <p>Hight School Diploma</p>
        </VerticalTimelineElement>

        {/* work element */}
        <VerticalTimelineElement className="vertical-timeline-element--work" date="2022 -2023" iconStyle={{ background: "yellow", color: "black" }} icon={<WorkIcon />}>
          <h3 className="vertical-timeline-title">I am Self-Taught and self-management</h3>
          <p>I have knowledge of HTML, CSS, javaScript and React. I have also a feew projects were i tried to cover all languages.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
