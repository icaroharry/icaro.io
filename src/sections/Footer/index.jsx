import React from "react";

import SocialIcons from "../../components/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-darker mt-10 h-24 w-full container mx-auto flex-column py-4 px-4 sm:px-24">
      <div className="flex-column sm:flex sm:justify-between">
        <SocialIcons />
        <div
          onClick={() =>
            window.open("https://github.com/icaroharry/icaro.io", "blank")
          }
          className="cursor-pointer font-mono text-xs w-full px-10 text-center sm:text-left sm:px-0 mt-5 sm:mt-0 sm:w-2/3 justify-end text-white content-center"
        >
          <span>
            this portfolio is released under the MIT license. Feel free to check
            the code at my GitHub :)
          </span>
        </div>
      </div>
    </footer>
  );
}
