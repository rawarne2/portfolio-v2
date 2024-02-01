"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionCard from "./SectionCard";
import { experienceData, IExperienceData } from "../lib/data";
import { CgWorkAlt } from "react-icons/cg";

export default function Experience() {
  return (
    <SectionCard title="Experience" id="experience">
      <VerticalTimeline animate={true}>
        {experienceData.map((job: IExperienceData, index: number) => (
          <VerticalTimelineElement
            visible={true}
            date={job.date}
            dateClassName={"text-white"}
            key={index}
            contentStyle={{ color: "black" }}
            icon={React.createElement(CgWorkAlt)}
            iconStyle={{ background: "black", color: "white" }}
          >
            <strong>
              <h3>{job.jobTitle}</h3>
            </strong>
            <h4>{job.location}</h4>
            <p className="text-left mt-2">{job.description}</p>
            {/* <p>{job.tools.toString()}</p> */}
            {/* TODO: make a tag component and add here */}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </SectionCard>
  );
}
