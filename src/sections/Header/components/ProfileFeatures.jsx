import { motion } from "framer-motion";
import React from "react";

const featureVariant = {
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: 1 + i * 0.5,
    },
  }),
  hidden: {
    opacity: 0,
  },
  hover: {
    scale: 1.15,
    originX: 0,
    color: "#B69AD6",
  },
};

const features = [
  ["💻", "developer"],
  ["👨🏽‍🏫", "teacher"],
  [
    "🚴🏽",
    <span key="cyclist">
      <strike>wannabe</strike> cyclist
    </span>,
  ],
  ["🙋", "a simple person"],
];

export default function ProfileFeatures() {
  return (
    <div className="flex flex-col text-center lg:text-left text-white font-mono text-xl font-semibold mb-10 lg:mb-0">
      {features.map(([emoji, description], index) => (
        <motion.span
          key={index}
          custom={index}
          variants={featureVariant}
          animate="visible"
          initial="hidden"
          whileHover="hover"
        >
          <span role="img" aria-label={`${emoji} emoji`}>
            {emoji}
          </span>{" "}
          {description}
        </motion.span>
      ))}
    </div>
  );
}
