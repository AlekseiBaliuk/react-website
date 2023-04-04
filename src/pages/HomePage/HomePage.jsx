import React from "react";
import { useScroll } from "framer-motion";
import { Container } from "components/Container/Container.styled";
import MainTitle from "components/MainTitle/MainTitle";
import Products from "components/Products/Products";
import Card from "components/Card/Card";
import * as SC from "./HomePage.styled";
import Info from "components/Info/Info";

const HomePage = () => {
   const { scrollYProgress } = useScroll();
  return (
    <>
      <SC.ProgressBar
        style={{ scaleX: scrollYProgress }}
      />
      <Container>
        <MainTitle />
      </Container>
      <Products />
      <Container>
        <SC.CardWrapper>
          <Card price="20" />
          <Card price="30" />
          <Card price="40" />
        </SC.CardWrapper>
      </Container>
      <Info />
    </>
  );
};

export default HomePage;
