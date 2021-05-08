/* eslint-disable no-undef */
import React from 'react';

import blogPosts from "../../dataSources/blogPosts";

export default function Blog() {
  return (
    <section id="blog" className="bg-dark h-auto w-full shadow-xl">
      <div className="container mx-auto flex-column py-4 px-4 sm:px-24 md:pb-24 lg:pb-48">
        <div className="flex-1 font-sans text-center lg:text-left text-4xl sm:text-5xl lg:text-4xl xl:text-5xl text-white font-bold">
          blog
          <div className="mt-10">
            {blogPosts.map((blogPost, i) => (
              <div
                key={i}
                className="cursor-pointer rounded-lg hover:shadow-xl my-6 shadow-lg flex flex-col bg-gray-light"
                onClick={() => window.open(blogPost.link, "blank")}
              >
                <div className="w-full h-40 flex items-center rounded-t-lg">
                  <img
                    className="w-full h-40 rounded-t-lg object-cover"
                    src={require(`../../img/${blogPost.picture}`)}
                    alt="Job"
                  />
                </div>
                <div className="flex flex-col p-4 text-left w-full">
                  <span className="font-mono text-white font-black text-lg sm:text-3xl">
                    {blogPost.title}
                  </span>
                  <div className="flex flex-row flex-wrap font-thin font-mono text-base sm:text-lg">
                    {blogPost.stack.map((tech, j) => (
                      <div
                        className="rounded-full bg-primary text-white shadow-md mr-2 p-2 my-4 flex-no-wrap hover:shadow-xl"
                        key={j}
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                  <span className="font-mono text-lg font-thin mt-4">
                    <span className="mr-2" role="img" aria-label="calendar">
                      🗓
                    </span>
                    {blogPost.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
