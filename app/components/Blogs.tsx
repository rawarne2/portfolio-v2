import React from "react";
import SectionCard from "./SectionCard";

const blogs = [
  {
    title: "Blog 1",
    image: "image",
    overview: "overview of the best blog ever",
    url: "something",
  },
  {
    title: "Blog 2",
    image: "image",
    overview: "overview of the best blog ever",
    url: "something",
  },
  {
    title: "Blog 2",
    image: "image",
    overview: "overview of the best blog ever",
    url: "something",
  },
];

export default function Blogs() {
  return (
    <SectionCard title="Blogs" id="blogs">
      <ul>
        {blogs.map((blog, index) => (
          <li key={index} className="p-4 m-4 dark:bg-gray-400 rounded-md">
            <h3 className="mb-2">
              <strong>{blog.title}</strong>
            </h3>
            <p>{blog.overview}</p>
            <a href={blog.url} target="_blank" rel="noopener noreferrer">
              CLICK HERE!
            </a>
          </li>
        ))}
      </ul>
    </SectionCard>
  );
}

// TODO: add image and make it link to the blog
