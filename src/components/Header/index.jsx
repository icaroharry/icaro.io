import React from 'react';

import { ReactComponent as BikePicture } from "../../img/picture.svg";

import { ReactComponent as GithubIcon } from "../../img/github.svg";
import { ReactComponent as TwitterIcon } from "../../img/twitter.svg";
import { ReactComponent as LinkedinIcon } from "../../img/linkedin.svg";

export default function Header() {
  return (
    <header id="intro" className="bg-dark min-h-screen w-full">
      <div className="container relative mx-auto flex-column py-4 px-4 sm:px  -24">
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
                  className="cursor-pointer"
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
                  className="cursor-pointer"
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
                  className="cursor-pointer"
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
                  👨🏽‍🏫
                </span>{" "}
                teacher
              </span>
              <span>
                <span role="img" aria-label="man biking">
                  🚴🏽‍
                </span>{" "}
                <strike>wannabe</strike>{" "}
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
    </header>
  )
}