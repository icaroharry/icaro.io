import React from "react";
import { motion } from "framer-motion";

import { ReactComponent as AvatarPicture } from "../../img/picture.svg";
import SocialIcons from "../../components/SocialIcons";
import Navbar from "./components/Navbar";
import ProfileFeatures from "./components/ProfileFeatures";

export default function Header() {
  return (
    <header id="intro" className="bg-dark min-h-screen w-full">
      <div className="container relative mx-auto flex-column py-4 px-4 sm:px  -24">
        <div className="flex-column sm:flex sm:justify-between">
          <SocialIcons />
          <Navbar />
        </div>
        <div className="flex flex-col lg:flex-row justify-between mt-0 sm:mt-24">
          <div>
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 50 }}
              className="flex-1 font-sans text-center lg:text-left text-5xl sm:text-6xl lg:text-5xl xl:text-6xl text-primary font-bold mt-10 md:mt-0 mb-10 lg:mb-0"
            >
              Ícaro Harry
            </motion.div>

            <ProfileFeatures />
          </div>
          <motion.div
            initial={{ x: "120vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
            className="w-auto mb-10 flex flex-col items-center"
          >
            <AvatarPicture />
          </motion.div>
        </div>
      </div>
    </header>
  );
}
