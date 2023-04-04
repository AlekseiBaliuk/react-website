import React from "react";
import { Container } from "components/Container/Container.styled";
import MainTitle from "components/MainTitle/MainTitle";
import Products from "components/Products/Products";
import Card from "components/Card/Card";
import * as SC from "./HomePage.styled";
import Info from "components/Info/Info";

const HomePage = () => {
  return (
    <>
      <Container>
        <MainTitle />
      </Container>
      <Products />
      <Container>
        <SC.CardWrapper>
          <Card />
          <Card />
          <Card />
        </SC.CardWrapper>
      </Container>
      <Info />
    </>
  );
};

export default HomePage;
