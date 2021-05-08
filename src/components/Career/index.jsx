/* eslint-disable no-undef */
import React from 'react';
import ReactMarkdown from 'react-markdown';

import careers from "../../dataSources/careers";

export default function Career() {
  return (
    <section id="career" className="bg-primary h-auto w-full pb-10 mt-20 lg:mt-0">
      <div className="container mx-auto flex-column py-4 px-4 sm:px-24 -mt-24 md:pb-24 lg:pb-48">
        <div className="flex-1 font-sans text-center lg:text-left text-4xl sm:text-5xl lg:text-4xl xl:text-5xl text-gray-800 font-bold">
          career
          <div className="mt-10">
            {careers.map((job, i) => (
              <div key={i}>
                <div className="flex">
                  <div
                    className="border-gray-800 rounded-full border-4"
                    style={{ height: 25, width: 25 }}
                  />
                  <div className="ml-4 font-thin font-mono text-lg">
                    {job.date}
                  </div>
                </div>
                <div className="ml-3 my-4 border-l border-gray-800">
                  <div className="pl-8 py-6 flex flex-col lg:flex-row justify-between">
                    <div className="mr-4">
                      <img
                        className="rounded-full h-16"
                        src={require(`../../img/${job.picture}`)}
                        alt="Job"
                      />
                    </div>
                    <div className="w-11/12">
                      <div className="-mt-3 text-left truncate">
                        <span className="font-black font-mono text-xl md:text-2xl">
                          {`${job.name} - `}
                        </span>
                        <span className="font-thin font-mono text-base md:text-lg">
                          {job.location}
                        </span>
                      </div>
                      <div className="font-thin font-mono text-base text-justify md:text-left">
                        <ReactMarkdown
                          linkTarget="_blank"
                          source={job.description}
                        />
                      </div>
                      <div className="flex flex-row flex-wrap font-thin font-mono text-lg mt-4">
                        {job.stack.map((tech, j) => (
                          <div
                            className="rounded-full bg-gray-800 text-white shadow-md mr-2 p-2 my-4 flex-no-wrap hover:shadow-xl"
                            key={j}
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}