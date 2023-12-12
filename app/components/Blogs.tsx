import React from "react";
const blogs = ["Blog 1", "Blog 2", "Blog 3"];
export default function Blogs() {
  return (
    <section id="blogs" className="flex flex-col p-4 w-5/6">
      <h2 className="text-3xl font-bold mb-4">Blogs</h2>
      <div className="p-4 dark:bg-gray-400 rounded-lg">
        <ul>
          {blogs.map((blog, index) => {
            return (
              <li className="m-4" key={index}>
                {blog}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
