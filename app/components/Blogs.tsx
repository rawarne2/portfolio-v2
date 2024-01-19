import React from "react";
import SectionCard from "./SectionCard";

export const blogs = [
  // move to data and name blogsData
  {
    id: 1,
    title: "New ES8 Features",
    image: "image",
    overview: `ECMAScript 2017 (ES8) was finalized in June 2017. 
      This article will go over some of the main features that 
      can make your code cleaner and easier to write. This explains 
      how to use new Object and String methods, trailing commas in 
      function parameters, and Async functions.`,
    url: "https://medium.com/@Rashaunwarner/new-es8-features-f3d8b7b4fc8c",
  },
  {
    id: 2,
    title: "Are You Accidentally Rounding Numbers in JavaScript???",
    image: "image",
    overview: `Learn how BigInt is used with large numbers to prevent unintentionally rounding.`,
    url: `https://medium.com/@Rashaunwarner/are-you-accidentally-rounding-numbers-in-javascript-c3b90cb04697`,
  },
  {
    id: 3,
    title: "New JavaScript Features from ECMAScript 2023 (ES14)",
    image: "image",
    overview: `The 14th edition of ECMAScript was released in June 2023 and 
      introduced several new features in JavaScript. It includes the array 
      methods toReversed, toSorted, toSpliced, with, findLast, and findLastIndex, 
      as well as hashbang comments support (#!) and the use of Symbols as key in weak collections.`,
    url: "https://medium.com/@Rashaunwarner/new-javascript-features-from-ecmascript-2023-es14-b1c2247bd965",
  },
];

export default function Blogs() {
  return (
    <SectionCard title="Blogs" id="blogs">
      <ul>
        {blogs.reverse().map((blog, index) => (
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
