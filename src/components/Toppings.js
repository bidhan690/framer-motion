import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring" },
  },

  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const buttonVariant = {
  hover: {
    scale: 1.1,
    textShadow: "0 0 8px rgb(255,255,255) ",
    boxShadow: "0 0 8px rgb(255,255,255) ",
    transition: {
      yoyo: Infinity,
    },
  },
  tap: {
    scale: 0.9,
  },
};

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="toppings container"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              whileHover={{ color: "#f8e112", originX: 0, scale: 1.3 }}
              transition={{ type: "spring", stiffness: 300 }}
              key={topping}
              onClick={() => addTopping(topping)}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button
          variants={buttonVariant}
          whileHover="hover"
          whileTap="tap"
        >
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
