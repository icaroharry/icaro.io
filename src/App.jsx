import React from "react";

import { ReactComponent as GreenWave } from "./img/green-wave.svg";
import { ReactComponent as WhiteWave } from "./img/white-wave.svg";
import { ReactComponent as DarkWave } from "./img/dark-wave.svg";

import { ReactComponent as GithubIcon } from "./img/github.svg";
import { ReactComponent as TwitterIcon } from "./img/twitter.svg";
import { ReactComponent as LinkedinIcon } from "./img/linkedin.svg";

function App() {
  return (
    <div className="App">
      <div className="bg-dark h-screen w-full">
        <div className="container mx-auto flex justify-between py-4">
          <div className="flex">
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
            <div>carreer | projects | blog</div>
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
