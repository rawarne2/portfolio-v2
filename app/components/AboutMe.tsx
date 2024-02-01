"use client";

import React from "react";
import Link from "next/link";
import SectionCard from "./SectionCard";
import profilePic from "../../public/profilePic.jpg";
import Image from "next/image";

export default function AboutMe() {
  // const handleDownload = () => {
  //   window.open("./../../public/RashaunWarnerResume.pdf");
  // };

  return (
    // add ref={ref} to SectionCard
    <React.Fragment>
      <Image
        src={profilePic}
        alt="Rashaun"
        width="250"
        height="250"
        quality="95"
        priority={true}
        className="h-60 w-60 rounded-full object-cover border-[0.25rem] border-white mt-12"
      />
      <SectionCard title="About Me" id="about-me">
        <>
          {/* 
          - add that this is a work in progress with last release date
        */}
          <p>
            Hello! I am a Fullstack Developer with a passion for creating web
            and mobile applications. I transitioned from a background in health
            and fitness to pursue my true passion: software development. I have
            crafted a diverse skill set by contributing to a wide array of
            projects at various companies. From leading end-to-end solutions and
            mentoring co-ops at a small consulting firm called Kinetic Vision,
            to working on high visibility mobile application with over 6 million
            users called iFIT. I enjoy solving intricate problems and crafting
            user-friendly web and mobile applications. I have primarily used
            JavaScript, TypeScript, Python, HTML, CSS, and React. I am currently
            actively seeking a new job that is ideally remote or located near
            Cincinnati, but I am open to other roles as well.
          </p>
          <br />
          <p>
            I graduated from the University of Illinois at Urbana-Champaign in
            2016 with a Bachelor&apos;s degree in Kinesiology. After working in
            the health and fitness industry, I realized that I wanted to be more
            creative, challenge myself mentally, and do something that I am
            truly passionate about. That&apos;s when I stumbled upon coding! I
            started to teach myself on my own and soon decided to fully commit
            and leave my job as a Fitness Specialist to attend a coding
            bootcamp. I attended Fullstack Academy of Code&apos;s immersive
            software engineering bootcamp where I learned fullstack JavaScript
            and web development in depth with lots of hands on experience. This
            is 17 week long, top ranked bootcamp, that fully prepares students
            for a career in software engineering. I learned a variety of new
            skills such as JavaScript, React, Redux, Node, Express, SQL,
            Sequelize, HTML, CSS, Git, and much more. I also learned how to work
            in a team environment and pair program on a wide variety of
            projects.
          </p>
          <div>
            <h2>My Resume</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              <a
                download={"RashaunWarnerResume"}
                href="/RashaunWarnerResume.pdf"
              >
                Download My Resume!
              </a>
            </button>
          </div>
        </>
      </SectionCard>
    </React.Fragment>
  );
}
