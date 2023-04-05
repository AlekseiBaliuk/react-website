import { theme } from "constants/theme";
import { device } from "devices";
import { motion } from "framer-motion";
import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 150px 0;

  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;

export const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background-color: ${theme.colors.accent};
  transform-origin: 0%;
`;
