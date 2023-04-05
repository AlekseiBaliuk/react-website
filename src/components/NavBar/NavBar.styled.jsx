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
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.fs18};
  font-weight: ${theme.fontWeights.fw700};
  line-height: 1.375;
  letter-spacing: 0.04em;
  padding: 8px 28px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media ${device.tablet} {
    font-size: ${theme.fontSizes.fs20};
    width: 180px;
    height: 50px;
  }

  @media ${device.desktop} {
    font-size: ${theme.fontSizes.fs16};
    width: 120px;
    height: 35px;
  }

  &.active,
  &:hover {
    color: ${theme.colors.accent};
    background-color: ${theme.colors.white};
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin: 30px auto 0;

  @media ${device.desktop} {
    margin: 0 0 0 auto;
  }
`;

export const List = styled.ul`
  @media ${device.desktop} {
    display: flex;
  }
`;

export const ListItem = styled(motion.li)`
  @media ${device.beforeDesktop} {
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }
  @media ${device.tabletOnly} {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
  @media ${device.desktop} {
    &:not(:first-child) {
      margin-left: 20px;
    }
  }
`;
