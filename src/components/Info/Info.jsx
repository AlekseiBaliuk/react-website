import { Container } from "components/Container/Container.styled";
import Section from "components/Section/Section";
import React from "react";
import InfoCard from "./InfoCard";
import InfoTitle from "./InfoTitle";

const Info = () => {
  return (
    <Section>
      <Container>
        <InfoTitle />
        <InfoCard heading="Heading 1" />
        <InfoCard heading="Heading 2" />
      </Container>
    </Section>
  );
};

export default Info;
