import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { theme } from "../../constants/theme";
import { device } from "../../devices";
import { motion } from "framer-motion";


export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.radii.br10};
  font-family: ${theme.fonts.main};
  border: ${theme.borders.main};
  color: ${theme.colors.white};
  /* background-color: ${theme.colors.white}; */
  font-size: ${theme.fontSizes.fs18};
  font-weight: ${theme.fontWeights.fw700};
  line-height: 1.375;
  letter-spacing: 0.04em;
  padding: 8px 28px;
  width: 130px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media ${device.tablet} {
    font-size: ${theme.fontSizes.fs16};
    padding-top: 10px;
    padding-bottom: 10px;
    width: 130px;
    height: 35px;
  }
  &.active,
  &:hover {
    color: ${theme.colors.accent};
    background-color: ${theme.colors.white};
    /* color: ${theme.colors.white};
    background-color: ${theme.colors.accent}; */
  }
`;

export const Nav = styled.nav`
  @media ${device.tabletOnly} {
    margin-right: 20px;
  }
  @media ${device.desktop} {
    /* margin-left: auto; */
  }
`;
export const List = styled.ul`
  display: flex;
  justify-content: center;
`;
export const ListItem = styled(motion.li)`
  &:last-child {
    margin-left: 12px;
    @media ${device.desktop} {
      margin-left: 20px;
    }
  }
`;
