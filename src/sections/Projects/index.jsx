/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import Chip from "../../components/Chip";

import projectsData from "../../dataSources/projects";

export default function Projects() {
  const [githubRepos, setGithubRepos] = useState([]);

  useEffect(() => {
    Promise.all(
      projectsData.map((project) =>
        fetch(
          `https://api.github.com/repos/${
            project.link.split("https://github.com/")[1]
          }`
        ).then((res) => res.json())
      )
    ).then((repos) => setGithubRepos(repos));
  }, []);

  const formatDateTime = (dateTime) => new Date(dateTime).toLocaleDateString();

  return (
    <section id="projects" className="bg-white h-auto w-full">
      <div className="container mx-auto flex-column py-4 px-4 sm:px-24 md:pb-24 lg:pb-48">
        <div className="flex-1 font-sans text-center lg:text-left text-4xl sm:text-5xl lg:text-4xl xl:text-5xl text-dark font-bold">
          projects
          <br />
          <span className="font-mono text-lg font-thin">
            personal projects and Open Source contributions
          </span>
          <div className="mt-10 mb-16">
            {projectsData.map((project, i) => (
              <div
                key={i}
                className="rounded-lg hover:shadow-xl my-6 shadow-lg flex cursor-pointer transition-shadow duration-100"
                onClick={() => window.open(project.link, "blank")}
              >
                <div
                  className={`bg-${project.colors[0]} w-1/4 p-2 flex items-center justify-center rounded-l-lg`}
                >
                  {project.picture.length ? (
                    <img
                      className="h-16 sm:h-32"
                      src={require(`../../img/${project.picture}`).default}
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
                  <span className="font-hairline text-gray-400 text-xs font-mono my-1">
                    last updated at {formatDateTime(githubRepos[i]?.pushed_at)}
                  </span>
                  <div className="flex flex-row flex-wrap font-thin font-mono text-xs sm:text-sm">
                    {project.stack.map((tech, j) => (
                      <Chip
                        text={tech}
                        index={j}
                        key={j}
                        backgroundColor={project.colors[1]}
                      />
                    ))}
                  </div>
                  <div className="block sm:flex text-lg mt-3 items-end justify-between w-full">
                    <div className="flex text-lg">
                      {githubRepos[i]?.stargazers_count > 0 && (
                        <span className="mr-4 flex items-center">
                          <span className="mr-1" role="img" aria-label="star">
                            ⭐
                          </span>{" "}
                          {githubRepos[i]?.stargazers_count}
                        </span>
                      )}
                      {githubRepos[i]?.forks > 0 && (
                        <span className="flex items-center">
                          <img
                            className="h-5 mr-1"
                            src={require("../../img/fork.svg").default}
                            alt="Git Fork"
                          />{" "}
                          {githubRepos[i]?.forks}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
