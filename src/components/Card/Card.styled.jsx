import styled from "styled-components";
import { device } from "devices";
import { theme } from "constants/theme";

export const Card = styled.div`
  text-align: center;
  max-width: 320px;
  min-height: 500px;
  padding: 10px;
  border-radius: 20px;
  border: ${theme.borders.main};
  background: ${(props) => props.theme.colors.white};
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);

  @media ${device.desktop} {
    width: 288px;
  }

  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    scale: 1.1;
  }
`;

export const Title = styled.h3`
  padding: 20px;

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
    padding: 10px 10px;
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
