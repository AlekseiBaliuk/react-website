import { theme } from "constants/theme";
import { device } from "devices";
import styled from "styled-components";

export const Title = styled.h2`
  text-align: left;
  padding: 30px 0;
  color: ${theme.colors.black};
`;

export const InfoWrapper = styled.div`
  max-width: 624px;
`;

export const Wrapper = styled.div`
  @media ${device.tablet} {
    display: flex;
    gap: 80px;
  }
`;

export const Button = styled.button`
  border-radius: ${theme.radii.br10};
  border: ${theme.borders.main};
  color: ${theme.colors.white};
  background-color: ${theme.colors.accent};
  font-family: ${theme.fonts.main};
  font-size: ${theme.fontSizes.fs16};
  font-weight: ${theme.fontWeights.fw500};
  line-height: 1.375;
  letter-spacing: 0.04em;
  padding: 8px 28px;
  width: 160px;
  opacity: 0.9;
  margin-bottom: 40px;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 1;
  }
`;

export const Text = styled.p`
  margin-top: 40px;
  margin-bottom: 40px;
  color: ${theme.colors.black};
  font-family: ${theme.fonts.main};
  font-size: ${theme.fontSizes.fs18};
  font-weight: ${theme.fontWeights.fw500};
  text-align: left;
`;

export const Img = styled.img`
  width: 400px;

  @media ${device.tablet} {
    height: 300px;
  }

  @media ${device.desktop} {
    width: 500px;
    height: auto;
  }
`;
