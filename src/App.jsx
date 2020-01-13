import React from "react";
import ReactMarkdown from "react-markdown";

import { ReactComponent as GreenWave } from "./img/green-wave.svg";
import { ReactComponent as WhiteWave } from "./img/white-wave.svg";
import { ReactComponent as DarkWave } from "./img/dark-wave.svg";

import { ReactComponent as GithubIcon } from "./img/github.svg";
import { ReactComponent as TwitterIcon } from "./img/twitter.svg";
import { ReactComponent as LinkedinIcon } from "./img/linkedin.svg";

import { ReactComponent as BikePicture } from "./img/picture.svg";

import careers from "./dataSources/careers";
import projects from "./dataSources/projects";
import blogPosts from "./dataSources/blogPosts";

function App() {
  return (
    <div className="App bg-darker pb-10">
      <div className="bg-dark min-h-screen w-full">
        <div className="container relative mx-auto flex-column py-4 px-4 sm:px-24">
          <div className="flex-column sm:flex sm:justify-between">
            <div className="flex justify-around">
              <div
                className="cursor-pointer"
                onClick={() =>
                  window.open("https://github.com/icaroharry", "blank")
                }
              >
                <GithubIcon />
              </div>
              <div
                className="ml-8 cursor-pointer"
                onClick={() =>
                  window.open("https://twitter.com/icaroharry", "blank")
                }
              >
                <TwitterIcon />
              </div>
              <div
                className="ml-8 cursor-pointer"
                onClick={() =>
                  window.open("https://linkedin.com/in/ícaro", "blank")
                }
              >
                <LinkedinIcon />
              </div>
            </div>
            <div className="flex justify-around mt-10 sm:mt-0">
              <div className="font-sans text-lg text-white">
                <span className="mr-2">
                  <span
                    onClick={() =>
                      document
                        .getElementById("career")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    career
                  </span>
                </span>{" "}
                |{" "}
                <span className="mx-2">
                  <span
                    onClick={() =>
                      document
                        .getElementById("projects")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    projects
                  </span>
                </span>{" "}
                |{" "}
                <span className="ml-2">
                  <span
                    onClick={() =>
                      document
                        .getElementById("blog")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    blog
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between mt-0 sm:mt-24">
            <div>
              <div className="flex-1 font-sans text-center lg:text-left text-5xl sm:text-6xl lg:text-5xl xl:text-6xl text-primary font-bold mt-10 md:mt-0 mb-10 lg:mb-0">
                Ícaro Harry
              </div>
              <div className="flex flex-col text-center lg:text-left text-white font-mono text-xl font-semibold mb-10 lg:mb-0">
                <span>
                  <span role="img" aria-label="laptop">
                    💻
                  </span>{" "}
                  developer
                </span>
                <span>
                  <span role="img" aria-label="tools">
                    🛠️
                  </span>{" "}
                  maker
                </span>
                <span>
                  <span role="img" aria-label="man biking">
                    🚴🏽‍
                  </span>{" "}
                  cyclist
                </span>
                <span>
                  <span role="img" aria-label="man raising hands">
                    🙋‍
                  </span>{" "}
                  a simple person
                </span>
              </div>
            </div>
            <BikePicture className="w-auto mb-10" />
          </div>
        </div>
      </div>
      <GreenWave className="w-full -mt-20 sm:-mt-32 md:-mt-48 lg:-mt-64" />
      <div id="career" className="bg-primary h-auto w-full pb-10 mt-20 lg:mt-0">
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
                          src={require(`./img/${job.picture}`)}
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
      </div>
      <WhiteWave className="w-full -mt-20 sm:-mt-32 md:-mt-40 lg:-mt-64" />
      <div id="projects" className="bg-white h-auto w-full">
        <div className="container mx-auto flex-column py-4 px-4 sm:px-24 md:pb-24 lg:pb-48">
          <div className="flex-1 font-sans text-center lg:text-left text-4xl sm:text-5xl lg:text-4xl xl:text-5xl text-dark font-bold">
            projects
            <br />
            <span className="font-mono text-lg font-thin">
              personal projects and Open Source contributions
            </span>
            <div className="mt-10 mb-16">
              {projects.map((project, i) => (
                <div
                  className="rounded-lg hover:shadow-xl my-6 shadow-lg flex cursor-pointer"
                  onClick={() => window.open(project.link, "blank")}
                >
                  <div
                    className={`bg-${project.colors[0]} w-1/4 p-2 flex items-center justify-center rounded-l-lg`}
                  >
                    {project.picture.length ? (
                      <img
                        className="h-16 sm:h-32"
                        src={require(`./img/${project.picture}`)}
                        alt="Project"
                      />
                    ) : (
                      <span className="text-6xl">
                        {project.title.slice(0, 1).toUpperCase()}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col p-4 text-left w-3/4">
                    <span className="font-mono text-dark font-black text-4xl">
                      {project.title}
                    </span>
                    <span className="font-mono text-dark font-thin text-base truncate">
                      {project.description}
                    </span>
                    <div className="flex flex-row flex-wrap font-thin font-mono text-xs sm:text-sm">
                      {project.stack.map((tech, j) => (
                        <div
                          className={`rounded-full bg-${project.colors[1]} text-white shadow-md mr-2 p-2 my-4 flex-no-wrap hover:shadow-xl`}
                          key={j}
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                    <div className="block sm:flex text-lg mt-3 items-end justify-between w-full">
                      <div className="flex text-lg">
                        {project.stars > 0 && (
                          <span className="mr-4 flex items-center">
                            <span className="mr-1" role="img" aria-label="star">
                              ⭐
                            </span>{" "}
                            {project.stars}
                          </span>
                        )}
                        {project.forks > 0 && (
                          <span className="flex items-center">
                            <img
                              className="h-5 mr-1"
                              src={require("./img/fork.svg")}
                              alt="Git Fork"
                            />{" "}
                            {project.forks}
                          </span>
                        )}
                      </div>
                      {/* <span className="font-hairline text-dark text-sm">last updated at {project.lastUpdated}</span> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <DarkWave className="w-full -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-48" />
      <div id="blog" className="bg-dark h-auto w-full shadow-xl">
        <div className="container mx-auto flex-column py-4 px-4 sm:px-24 md:pb-24 lg:pb-48">
          <div className="flex-1 font-sans text-center lg:text-left text-4xl sm:text-5xl lg:text-4xl xl:text-5xl text-white font-bold">
            blog
            <div className="mt-10">
              {blogPosts.map((blogPost, i) => (
                <div
                  className="cursor-pointer rounded-lg hover:shadow-xl my-6 shadow-lg flex flex-col bg-gray-light"
                  onClick={() => window.open(blogPost.link, "blank")}
                >
                  <div className="w-full h-40 flex items-center rounded-t-lg">
                    <img
                      className="w-full h-40 rounded-t-lg object-cover"
                      src={require(`./img/${blogPost.picture}`)}
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
      </div>
      <div className="bg-darker mt-10 h-24 w-full container mx-auto flex-column py-4 px-4 sm:px-24">
        <div className="flex-column sm:flex sm:justify-between">
          <div className="flex justify-around">
            <div
              className="cursor-pointer"
              onClick={() =>
                window.open("https://github.com/icaroharry", "blank")
              }
            >
              <GithubIcon />
            </div>
            <div
              className="ml-8 cursor-pointer"
              onClick={() =>
                window.open("https://twitter.com/icaroharry", "blank")
              }
            >
              <TwitterIcon />
            </div>
            <div
              className="ml-8 cursor-pointer"
              onClick={() =>
                window.open("https://linkedin.com/in/ícaro", "blank")
              }
            >
              <LinkedinIcon />
            </div>
          </div>
          <div className="font-mono text-xs w-full px-10 text-center sm:text-left sm:px-0 mt-5 sm:mt-0 sm:w-2/3 justify-end text-white content-center">
            <span>
              this portfolio is released under the MIT license. Feel free to
              check the code at my GitHub :)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
