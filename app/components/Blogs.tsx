import React from "react";
import SectionCard from "./SectionCard";

const blogs = ["Blog 1", "Blog 2", "Blog 3"];

export default function Blogs() {
  return (
    <SectionCard title="Blogs">
      <ul>
        {blogs.map((blog, index) => {
          return (
            <li className="m-4" key={index}>
              {blog}
            </li>
          );
        })}
      </ul>
    </SectionCard>
  );
}
