"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";

// remove email icon and say email me at
export default function Footer() {
  return (
    <footer className="flex items-center justify-between flex-wrap p-6">
      <SocialIcon
        className="mx-8 max-sm:mx-2 rounded-full border-[0.15rem] border-white"
        url="https://www.linkedin.com/in/rashaun-warner/"
        title="linkedin"
      />
      <SocialIcon
        className="mx-8 max-sm:mx-2 rounded-full border-[0.15rem] border-white"
        url="https://github.com/rawarne2"
        title="github"
      />
      <SocialIcon
        className="mx-8 max-sm:mx-2 rounded-full border-[0.15rem] border-white"
        url="https://medium.com/@Rashaunwarner"
        title="medium"
      />
      {/* <SocialIcon
        className="mx-8 max-sm:mx-2 rounded-full border-[0.15rem] border-white"
        url="mailto:RashaunWarner@yahoo.com"
        title="email"
        about="RashaunWarner@yahoo.com"
      /> */}
    </footer>
  );
}

// Please get in touch with me if you are interested in having me join your development team or have any questions!
// add link to footer called Contact Me
// add email address, linkedin, github, codementor maybe, medium
