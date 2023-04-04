import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

import Logo from "components/Logo/Logo";
import NavBar from "components/NavBar/NavBar";

import { Container } from "components/Container/Container.styled";
import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import * as SC from "./Header.styled";
import AuthNav from "components/AuthNav/AuthNav";

export const Header = () => {
  const [menu, setMenu] = useState(false);

  const beforeTablet = useMediaQuery({ query: "(max-width: 767px)" });
  const tablet = useMediaQuery({ query: "(min-width: 768px)" });
  const beforeDesktop = useMediaQuery({ query: "(max-width: 1279px)" });
  const desktop = useMediaQuery({ query: "(min-width: 1280px)" });

  const toggleMenu = () => setMenu((value) => !value);
  const closeMenu = () => setMenu(false);

  const animation = {
    hidden: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
  };

  return (
    <SC.Header>
      <Container>
        <SC.ToolBar>
          <SC.LogoContainer onClick={closeMenu}>
            <Logo />
          </SC.LogoContainer>

          {/* tablet user nav */}
          {!menu && tablet && beforeDesktop && <AuthNav />}

          {/* mobile & tablet burger icon */}
          {beforeDesktop && (
            <IconButton color="inherit" onClick={toggleMenu}>
              {!menu ? (
                <MenuIcon sx={{ fontSize: "40px" }} />
              ) : (
                <CloseIcon sx={{ fontSize: "40px" }} />
              )}
            </IconButton>
          )}

          {/* desktop nav, user nav */}
          {desktop && (
            <>
              <NavBar />
              <AuthNav />
            </>
          )}
        </SC.ToolBar>

        {/* mobile burger menu */}
        {menu && beforeTablet && (
          <motion.div initial="hidden" animate="visible" variants={animation}>
            <Box onClick={closeMenu} height={"100vh"} marginTop={"46px"}>
              <AuthNav />
              <NavBar />
            </Box>
          </motion.div>
        )}

        {/* tablet burger menu */}
        {menu && tablet && beforeDesktop && (
          <motion.div initial="hidden" animate="visible" variants={animation}>
            <Box onClick={closeMenu} height={"100vh"} marginTop={"88px"}>
              <NavBar />
            </Box>
          </motion.div>
        )}
      </Container>
    </SC.Header>
  );
};
