import React from "react";
import * as SC from "./Products.styled";

import { Container } from "components/Container/Container.styled";
import Section from "components/Section/Section";
import placeholder from "../../staticImages/placeholder.png";

const Products = () => {
  const handleClick = () => {
    console.log("Click");
  };

  return (
    <Section>
      <Container>
        <SC.Wrapper>
          <SC.InfoWrapper>
            <SC.Title>Products</SC.Title>
            <SC.Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.
            </SC.Text>

            <SC.Button
              type="button"
              onClick={handleClick}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Get Started
            </SC.Button>
          </SC.InfoWrapper>
          <SC.Img src={placeholder} alt="placeholder" />
        </SC.Wrapper>
      </Container>
    </Section>
  );
};

export default Products;
