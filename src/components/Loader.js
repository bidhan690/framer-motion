import React from "react";
import { motion, useCycle } from "framer-motion";

const loaderVariants = {
  animateOne: {
    x: [-20, 20],

    y: [-20, 20],

    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  animateTwo: {
    y: [0, -20],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animateOne", "animateTwo");
  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}
      ></motion.div>
      <div onClick={() => cycleAnimation()}>Click me!</div>
    </>
  );
};

export default Loader;
