import React from "react";
import { motion } from "framer-motion";
import * as SC from "./Info.styled";

const InfoCard = ({ heading }) => {
  const handleClick = () => {
    console.log("Click");
  };

  return (
    <SC.InfoCardWrapper>
      <SC.SubTitle>{heading}</SC.SubTitle>
      <SC.Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </SC.Text>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <SC.Button type="button" onClick={handleClick}>
          Learn More
        </SC.Button>
      </motion.div>
    </SC.InfoCardWrapper>
  );
};

export default InfoCard;
