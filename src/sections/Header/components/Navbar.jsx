import { motion } from "framer-motion";
import React from "react";

const links = ["career", "projects", "blog"];

export default function Navbar() {
  return (
    <nav className="flex justify-around mt-10 sm:mt-0">
      <div className="font-sans text-lg text-white">
        {links.map((link, index) => (
          <span key={index}>
            <span className={`mr-2 ${index !== 0 && "ml-4"}`}>
              <motion.span
                whileHover={{
                  backgroundColor: "#FFF",
                  color: "#B69AD6",
                }}
                className="cursor-pointer p-2 rounded-full"
                onClick={() =>
                  document
                    .getElementById(link)
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                {link}
              </motion.span>
            </span>{" "}
            {index !== links.length - 1 && `|`}
          </span>
        ))}
      </div>
    </nav>
  );
}
