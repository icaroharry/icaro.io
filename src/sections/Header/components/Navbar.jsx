import { motion } from "framer-motion";
import React from "react";

const links = ["career", "projects", "blogs"];

export default function Navbar() {
  return (
    <nav className="flex justify-around mt-10 sm:mt-0">
      <div className="font-sans text-lg text-white">
        {links.map((link, index) => (
          <>
            <span className="mr-2">
              <motion.span
                whileHover={{ color: "#B69AD6" }}
                className="cursor-pointer"
                onClick={() =>
                  document
                    .getElementById(link)
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                {link}
              </motion.span>
            </span>{" "}
            {index !== links.length - 1 && `| `}
          </>
        ))}
      </div>
    </nav>
  );
}
