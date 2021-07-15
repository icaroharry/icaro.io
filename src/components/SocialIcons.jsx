import React from "react";

import GithubIcon from "./GithubIcon";
import TwitterIcon from "./TwitterIcon";
import LinkedinIcon from "./LinkedinIcon";

export default function SocialIcons() {
  return (
    <div className="flex justify-around">
      <div
        className="cursor-pointer"
        onClick={() => window.open("https://github.com/icaroharry", "blank")}
      >
        <GithubIcon />
      </div>
      <div
        className="ml-8 cursor-pointer"
        onClick={() => window.open("https://twitter.com/icaroharry", "blank")}
      >
        <TwitterIcon />
      </div>
      <div
        className="ml-8 cursor-pointer"
        onClick={() => window.open("https://linkedin.com/in/ícaro", "blank")}
      >
        <LinkedinIcon />
      </div>
    </div>
  );
}
