import React from "react";

import { ReactComponent as GreenWave } from "./img/green-wave.svg";
import { ReactComponent as WhiteWave } from "./img/white-wave.svg";
import { ReactComponent as DarkWave } from "./img/dark-wave.svg";

import { ReactComponent as GithubIcon } from "./img/github.svg";
import { ReactComponent as TwitterIcon } from "./img/twitter.svg";
import { ReactComponent as LinkedinIcon } from "./img/linkedin.svg";

import { ReactComponent as BikePicture } from "./img/picture.svg";

function App() {
  return (
    <div className="App">
      <div className="bg-dark h-screen w-full">
        <div className="container mx-auto flex-column py-4 px-24">
          <div className="flex-column sm:flex sm:justify-between">
            <div className="flex justify-around">
              <div className="cursor-pointer" onClick={() => {}}>
                <GithubIcon />
              </div>
              <div className="ml-8 cursor-pointer" onClick={() => {}}>
                <TwitterIcon />
              </div>
              <div className="ml-8 cursor-pointer" onClick={() => {}}>
                <LinkedinIcon />
              </div>
            </div>
            <div className="flex">
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
          <div className="flex justify-between mt-24">
            <div className="flex-1 font-sans text-6xl text-primary font-bold">
              Ícaro Harry
            </div>
            <BikePicture />
          </div>
        </div>
      </div>
      <GreenWave className="w-full -mt-20 sm:-mt-32 md:-mt-40 lg:-mt-64" />
      <div className="bg-primary h-screen w-full"></div>
      <WhiteWave className="w-full -mt-20 sm:-mt-32 md:-mt-40 lg:-mt-64" />
      <div className="bg-white h-screen w-full"></div>
      <DarkWave className="w-full -mt-20 sm:-mt-32 md:-mt-40 lg:-mt-64" />
      <div className="bg-dark h-screen w-full"></div>
    </div>
  );
}

export default App;
