import React from "react";
import { motion } from "framer-motion";
import * as SC from "./Card.styled";

const Card = ({ price }) => {
  const handleClick = () => {
    console.log("Click");
  };

  const titleVariants = {
    hidden: {
      y: 400,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
  };

  return (
    <motion.div initial={"hidden"} animate={"visible"} variants={titleVariants}>
      <SC.Card>
        <SC.Title>{price}$</SC.Title>
        <SC.Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </SC.Text>

        <SC.Button type="button" onClick={handleClick}>
          Get Started
        </SC.Button>
      </SC.Card>
    </motion.div>
  );
};

export default Card;
