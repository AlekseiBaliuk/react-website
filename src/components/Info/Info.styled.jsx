import { theme } from "constants/theme";
import styled from "styled-components";

export const Title = styled.h2`
  padding: 30px 0;
  text-align: center;
  color: ${theme.colors.white};

  font-family: ${theme.fonts.main};
  font-size: ${theme.fontSizes.fs48};
  font-weight: ${theme.fontWeights.fw700};
`;

export const SubTitle = styled.h3`
  text-align: left;
  padding: 30px 0;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.main};
  font-size: ${theme.fontSizes.fs36};
  font-weight: ${theme.fontWeights.fw600};
`;

export const Text = styled.p`
  padding: 30px 0;
  text-align: left;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.main};
  font-size: ${theme.fontSizes.fs18};
  font-weight: ${theme.fontWeights.fw500};
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
  margin-top: 40px;
  /* margin-left: 80px; */

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 1;
  }
`;

export const InfoCardWrapper = styled.div`
  text-align: center;
  padding: 40px 0;
`;
