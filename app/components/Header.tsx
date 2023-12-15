// import React from "react";

// export default function Header() {
//   return (
//     <h1 className="text-3xl font-medium capitalize my-8 text-center">
//       Rashaun Warner&apos;s Portfolio
//     </h1>
//   );
// }
"use client";
// components/Header.tsx
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // Adjusted for header height
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-medium capitalize my-8 text-center">
        Rashaun Warner&apos;s Portfolio
      </h1>
      <nav>
        <Link href="#about-me">About Me</Link>
        <Link href="#skills">My Skills</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#blogs">Blogs</Link>
      </nav>
    </div>
  );
};

export default Header;
