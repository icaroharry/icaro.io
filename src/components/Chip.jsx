import { motion } from "framer-motion";
import React from "react";
import useAnimateInView from "../hooks/useAnimateInView";

const chipVariant = {
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2 + i * 0.1,
    },
  }),
  hidden: {
    opacity: 0,
    x: -100,
  },
};

export default function Chip({
  text,
  index,
  backgroundColor = "gray-800",
  textColor = "white",
}) {
  const [ref, controls] = useAnimateInView();
  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={chipVariant}
      animate={controls}
      initial="hidden"
      className={`rounded-full bg-${backgroundColor} text-${textColor} shadow-md mr-2 p-2 my-4 flex-nowrap hover:shadow-xl transition-shadow duration-100`}
      key={index}
    >
      {text}
    </motion.div>
  );
}
