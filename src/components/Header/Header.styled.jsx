import { theme } from "constants/theme";
import styled from "styled-components";
import { device } from "../../devices";

export const Header = styled.header`
  position: fixed;
  /* top: 0;
  left: 0; */
  width: 100%;
  /* backdrop-filter: blur(200px); */
  z-index: 100;
  background-color: ${theme.colors.accent};
  /* padding-bottom: 80px;
  margin-bottom: 40px; */
  border-bottom: ${theme.borders.main};
  @media ${device.tablet} {
    /* margin-bottom: 80px; */
  }
  @media ${device.desktop} {
    /* margin-bottom: 60px; */
  }
`;

export const ToolBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 767px) {
    justify-content: space-between;
  }
`;

export const LogoContainer = styled.div`
  @media ${device.tablet} {
  }
`;
