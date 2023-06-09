import { theme } from "constants/theme";
import styled from "styled-components";

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

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 1;
  }
`;
