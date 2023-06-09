import styled from "styled-components";
import { device } from "devices";
import { theme } from "constants/theme";
import { motion } from "framer-motion";

export const Card = styled(motion.div)`
  text-align: center;
  max-width: 320px;
  min-height: 500px;
  overflow: hidden;
  border-radius: 20px;
  border: ${theme.borders.main};
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);

  @media ${device.desktop} {
    width: 288px;
  }

  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const BigCard = styled(motion.div)`
  text-align: center;
  max-width: 320px;
  min-height: 560px;
  overflow: hidden;
  border-radius: 20px;
  border: ${theme.borders.main};
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);

  @media ${device.desktop} {
    width: 360px;
  }

  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Title = styled.h3`
  padding: 20px;

  background-color: ${theme.colors.accent};
  color: ${theme.colors.white};
  font-family: ${theme.fonts.main};
  font-size: ${theme.fontSizes.fs28};
  font-weight: ${theme.fontWeights.fw700};
`;

export const Text = styled.p`
  padding: 20px 50px;
  text-align: left;
  font-family: ${theme.fonts.main};
  font-size: ${theme.fontSizes.fs16};
  font-weight: ${theme.fontWeights.fw500};

  @media ${device.tablet} {
    padding: 30px 20px;
  }
`;

export const Button = styled.button`
  border-radius: ${theme.radii.br10};
  border: ${theme.borders.main};
  color: ${theme.colors.white};
  background-color: ${theme.colors.accent};
  font-family: ${theme.fonts.main};
  font-size: ${theme.fontSizes.fs16};
  font-weight: ${theme.fontWeights.fw600};
  line-height: 1.375;
  letter-spacing: 0.04em;
  padding: 8px 28px;
  width: 160px;
  opacity: 0.9;
  margin-top: 40px;
  margin-bottom: 10px;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 1;
  }

  @media ${device.tablet} {
    /* margin-top: 20px; */
  }

  @media ${device.desktop} {
    margin-top: 60px;
  }
`;
