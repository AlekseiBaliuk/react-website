import { theme } from "constants/theme";
import styled from "styled-components";
import { device } from "../../devices";
// import { Box } from "@mui/material";


export const Header = styled.header`
  margin-bottom: 40px;
  border-bottom: ${theme.borders.main};
  @media ${device.tablet} {
    margin-bottom: 80px;
  }
  @media ${device.desktop} {
    margin-bottom: 60px;
  }
`;

export const ToolBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 767px) {
    justify-content: space-between;
  }
`;

export const LogoContainer = styled.div`
  @media ${device.tablet} {
  }
`;
