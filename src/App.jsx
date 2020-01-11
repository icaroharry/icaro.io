import React from "react";

import { ReactComponent as GreenWave } from "./img/green-wave.svg";
import { ReactComponent as WhiteWave } from "./img/white-wave.svg";
import { ReactComponent as DarkWave } from "./img/dark-wave.svg";

import { ReactComponent as GithubIcon } from "./img/github.svg";
import { ReactComponent as TwitterIcon } from "./img/twitter.svg";
import { ReactComponent as LinkedinIcon } from "./img/linkedin.svg";

import { ReactComponent as BikePicture } from "./img/picture.svg";

import carreers from './dataSources/carreers';
import projects from "./dataSources/projects";
import blogPosts from "./dataSources/blogPosts";

function App() {
  return (
    <div className="App">
      <div className="bg-dark min-h-screen w-full">
        <div className="container mx-auto flex-column py-4 px-4 sm:px-24">
          <div className="flex-column sm:flex sm:justify-between">
            <div className="flex justify-around">
              <div className="cursor-pointer" onClick={() => { }}>
                <GithubIcon />
              </div>
              <div className="ml-8 cursor-pointer" onClick={() => { }}>
                <TwitterIcon />
              </div>
              <div className="ml-8 cursor-pointer" onClick={() => { }}>
                <LinkedinIcon />
              </div>
            </div>
            <div className="flex justify-around mt-10 sm:mt-0">
              <div className="font-sans text-lg text-white">
                <span className="mr-2">
                  <a href="">carreer</a>
                </span>{" "}
                |{" "}
                <span className="mx-2">
                  <a href="">projects</a>
                </span>{" "}
                |{" "}
                <span className="ml-2">
                  <a href="">blog</a>
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
                <span><span role="img" aria-label="laptop">💻</span> developer</span>
                <span><span role="img" aria-label="tools">🛠️</span> maker</span>
                <span><span role="img" aria-label="man biking">🚴🏽‍</span> cyclist</span>
                <span><span role="img" aria-label="man raising hands">🙋‍</span> a simple person</span>
              </div>
            </div>
            <BikePicture className="w-auto mb-10" />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <GreenWave className="w-full -mt-20 sm:-mt-32 md:-mt-48 lg:-mt-64" />
      <div className="bg-primary h-auto w-full pb-10 mt-20 lg:mt-0">
        <div className="container mx-auto flex-column py-4 px-4 sm:px-24 -mt-24 md:pb-24 lg:pb-48">
          <div className="flex-1 font-sans text-center lg:text-left text-4xl sm:text-5xl lg:text-4xl xl:text-5xl text-gray-800 font-bold">
            carreer
            <div className="mt-10">
              {carreers.map((job, i) =>
                <div key={i}>
                  <div className="flex">
                    <div className="border-gray-800 rounded-full border-4" style={{ height: 25, width: 25 }} />
                    <div className="ml-4 font-thin font-mono text-lg">{job.date}</div>
                  </div>
                  <div className="ml-3 my-4 border-l border-gray-800">
                    <div className="pl-8 py-6 flex flex-col lg:flex-row">
                      <div className="w-auto lg:w-64 mr-4">
                        <img src={require(`./img/${job.picture}`)} alt="Job" />
                      </div>
                      <div>
                        <div className="-mt-3 text-left truncate">

                          <span className="font-black font-mono text-xl md:text-2xl">
                            {`${job.name} - `}
                          </span>
                          <span className="font-thin font-mono text-base md:text-lg">
                            {job.location}
                          </span>
                        </div>
                        <div className="font-thin font-mono text-base text-justify md:text-left">
                          {job.description}
                        </div>
                        <div className="flex flex-row flex-wrap font-thin font-mono text-lg mt-4">
                          {job.stack.map((tech, j) =>
                            <div className="rounded-full bg-gray-800 text-white shadow-md mr-2 p-2 my-4 flex-no-wrap hover:shadow-xl" key={j}>{tech}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
      <WhiteWave className="w-full -mt-20 sm:-mt-32 md:-mt-40 lg:-mt-64" />
      <div className="bg-white h-auto w-full mb-10">
        <div className="container mx-auto flex-column py-4 px-4 sm:px-24 md:pb-24 lg:pb-48">
          <div className="flex-1 font-sans text-center lg:text-left text-4xl sm:text-5xl lg:text-4xl xl:text-5xl text-dark font-bold">
            projects
            <br />
            <span className="font-mono text-lg font-thin">personal projects and Open Source contributions</span>
            <div className="mt-10">
              {projects.map((project, i) =>
                <div className="rounded-lg hover:shadow-xl my-6 shadow-lg flex">
                  <div className="bg-light w-56 h-56 p-2 flex items-center rounded-l-lg">
                    <img src={require(`./img/${project.picture}`)} alt="Job" />
                  </div>
                  <div className="flex flex-col p-4 text-left w-full">
                    <span className="font-mono text-dark font-black text-4xl">{project.title}</span>
                    <span className="font-mono text-dark font-thin text-base">{project.description}</span>
                    <div className="flex flex-row flex-wrap font-thin font-mono text-lg">
                      {project.stack.map((tech, j) =>
                        <div className="rounded-full bg-primary text-white shadow-md mr-2 p-2 my-4 flex-no-wrap hover:shadow-xl" key={j}>{tech}</div>
                      )}
                    </div>
                    <div className="flex text-lg mt-3 items-end justify-between w-full">
                      <div className="flex text-lg">
                        <span className="mr-4 flex items-center">
                          <span className="mr-1" role="img" aria-label="star">⭐</span> 13
                        </span>
                        <span className="flex items-center">
                          <img className="h-5 mr-1" src={require('./img/fork.svg')} alt="Git Fork" /> 2
                        </span>
                      </div>
                      <span className="font-hairline text-dark text-sm">last updated at {project.lastUpdated}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <DarkWave className="w-full -mt-20 sm:-mt-32 md:-mt-40 lg:-mt-64" />
      <div className="bg-dark h-auto w-full shadow-2xl">
        <div className="container mx-auto flex-column py-4 px-4 sm:px-24 md:pb-24 lg:pb-48">
          <div className="flex-1 font-sans text-center lg:text-left text-4xl sm:text-5xl lg:text-4xl xl:text-5xl text-white font-bold">
            blog
            <div className="mt-10">
              {blogPosts.map((blogPost, i) =>
                <div className="rounded-lg hover:shadow-xl my-6 shadow-lg flex flex-col bg-gray-light">
                  <div className="w-full h-40 flex items-center rounded-t-lg">
                    <img className="w-full h-40 rounded-t-lg object-cover" src={require(`./img/${blogPost.picture}`)} alt="Job" />
                  </div>
                  <div className="flex flex-col p-4 text-left w-full">
                    <span className="font-mono text-white font-black text-4xl">{blogPost.title}</span>
                    <div className="flex flex-row flex-wrap font-thin font-mono text-lg">
                      {blogPost.stack.map((tech, j) =>
                        <div className="rounded-full bg-primary text-white shadow-md mr-2 p-2 my-4 flex-no-wrap hover:shadow-xl" key={j}>{tech}</div>
                      )}
                    </div>
                    <span className="font-mono text-lg font-thin mt-4">
                      <span className="mr-2" role="img" aria-label="calendar">🗓</span>
                      {blogPost.date}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-darker h-24 w-full"></div>
    </div >
  );
}

export default App;
