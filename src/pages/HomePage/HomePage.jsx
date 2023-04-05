import React from "react";
import { Container } from "components/Container/Container.styled";
import Products from "components/Products/Products";
import Card from "components/Card/Card";
import * as SC from "./HomePage.styled";
import Info from "components/Info/Info";
import BigCard from "components/Card/BigCard";

const HomePage = () => {
  return (
    <>
      <Products />
      <Container>
        <SC.CardWrapper>
          <Card price="20" />
          <BigCard price="30" />
          <Card price="40" />
        </SC.CardWrapper>
      </Container>
      <Info />
    </>
  );
};

export default HomePage;
