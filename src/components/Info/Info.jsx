import Section from "components/Section/Section";
import React from "react";
import InfoCard from "./InfoCard";
import InfoTitle from "./InfoTitle";

const Info = () => {
  return (
    <>
      <InfoTitle />
    <Section>
      <InfoCard heading="Heading 1" />
    </Section>
      <InfoCard heading="Heading 2" />
    </>
  );
};

export default Info;
