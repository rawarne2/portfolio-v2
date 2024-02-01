"use client";
// components/Header.tsx
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>("about-me");

  useEffect(() => {
    // scroll to top on initial render
    window.scrollTo(0, 0); // TODO: enable for prod

    // Remove any hash params from the URL
    if (window.location.hash) {
      history.replaceState(null, "", "/");
    }

    const sections = document.querySelectorAll("section");

    const handler = () => {
      sections.forEach(({ offsetHeight, offsetTop, id }, i) => {
        if (
          window.scrollY + 100 >= offsetTop &&
          window.scrollY < offsetTop + offsetHeight
        ) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  // TODO: map over links since they are all the same layout
  return (
    <header className="mt-24">
      <nav>
        <Link
          href="#about-me"
          className={activeSection === "about-me" ? "text-blue-500" : undefined}
          onClick={() => {
            setActiveSection("about-me");
          }}
        >
          About Me
        </Link>
        <Link
          href="#skills"
          className={activeSection === "skills" ? "text-blue-500" : undefined}
          onClick={() => {
            setActiveSection("skills");
          }}
        >
          My Skills
        </Link>
        <Link
          href="#experience"
          className={
            activeSection === "experience" ? "text-blue-500" : undefined
          }
          onClick={() => {
            setActiveSection("experience");
          }}
        >
          Experience
        </Link>
        <Link
          href="#projects"
          className={activeSection === "projects" ? "text-blue-500" : undefined}
          onClick={() => {
            setActiveSection("projects");
          }}
        >
          Projects
        </Link>
        <Link
          href="#blogs"
          className={activeSection === "blogs" ? "text-blue-500" : undefined}
          onClick={() => {
            setActiveSection("blogs");
          }}
        >
          Blogs
        </Link>
      </nav>
      <h1 className="text-3xl font-medium capitalize text-center">
        Rashaun Warner&apos;s Portfolio
      </h1>
    </header>
  );
};

export default Header;
