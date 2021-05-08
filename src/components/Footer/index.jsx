import React from 'react';

import { ReactComponent as GithubIcon } from "../../img/github.svg";
import { ReactComponent as TwitterIcon } from "../../img/twitter.svg";
import { ReactComponent as LinkedinIcon } from "../../img/linkedin.svg";

export default function Footer() {
  return (
    <footer className="bg-darker mt-10 h-24 w-full container mx-auto flex-column py-4 px-4 sm:px-24">
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
        <div
          onClick={() =>
            window.open("https://github.com/icaroharry/icaro.io", "blank")
          }
          className="cursor-pointer font-mono text-xs w-full px-10 text-center sm:text-left sm:px-0 mt-5 sm:mt-0 sm:w-2/3 justify-end text-white content-center"
        >
          <span>
            this portfolio is released under the MIT license. Feel free to
            check the code at my GitHub :)
          </span>
        </div>
      </div>
    </footer>
  )
}
