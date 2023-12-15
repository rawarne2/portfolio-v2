import React from "react";
import SectionCard from "./SectionCard";

export default function AboutMe() {
  return (
    <SectionCard title="Projects" id="about-me">
      <p>
        Hello! I am a Fullstack Developer with a passion for creating web and
        mobile applications. I am currently looking for a full-time position
        that is remote or located in Cincinnati. After graduating with a degree
        in <span className="font-medium">Kinesiology</span>, I decided to pursue
        my passion for programming. I have a strong background in JavaScript and
        TypeScript, and I am always eager to learn new technologies.
      </p>
    </SectionCard>
  );
}
