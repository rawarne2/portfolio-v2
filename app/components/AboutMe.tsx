import React from "react";

export default function AboutMe() {
  return (
    <section id="about-me" className="flex flex-col p-4 w-5/6">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <div className="p-4 dark:bg-gray-400 rounded-lg">
        <p>
          Hello! I am a Fullstack Developer with a passion for creating web and
          mobile applications. I am currently looking for a full-time position
          that is remote or located in Cincinnati. After graduating with a
          degree in <span className="font-medium">Kinesiology</span>, I decided
          to pursue my passion for programming. I have a strong background in
          JavaScript and TypeScript, and I am always eager to learn new
          technologies.
        </p>
      </div>
    </section>
  );
}
