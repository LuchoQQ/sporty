import { Flex, Text, Icon, useTheme, Grid } from "@chakra-ui/react";
import { GiRunningShoe } from "react-icons/gi";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [scroll, setScroll] = useState(0);
  const [mobile, setMobile] = useState(false);
  const theme = useTheme();
  const onScroll = () => {
    setScroll(window.scrollY);
  };
  window.addEventListener("scroll", onScroll);

  return (
    <>
      <Flex
        position="fixed"
        h="10vh"
        w="100vw"
        bg={scroll > 0 ? "#dedede" : "#fff"}
        justifyContent="space-between"
        alignItems="center"
        fontFamily={theme.fonts.primary}
        fontSize="1.5rem"
        px="2rem"
        zIndex={10000}
        transition="all 1s ease"
      >
        <Flex fontSize={"2.5rem"}>
          <Icon as={GiRunningShoe} alignSelf="center" />
          <Text fontFamily={theme.fonts.secondary}>SPORTY</Text>
        </Flex>
        <Flex gap="2rem" display={["none", "none", "flex", "flex"]}>
          <Navbar />
        </Flex>
        <Flex
          w="100vw"
          h="100vh"
          bg="#fff"
          position="fixed"
          top="10vh"
          left={mobile ? "0" : "-100vw"}
          justifyContent="center"
          transition="all 0.3s ease"
        >
          <Grid alignContent="space-around">
            <Navbar />
            <Flex gap="1rem" mb="1rem">
              <Icon as={AiOutlineSearch} fontSize="2rem" />
              <Icon as={BsCart} fontSize="2rem" />
              <NavLink to="/sign">
                <Icon as={AiOutlineUser} fontSize="2rem" />
              </NavLink>
            </Flex>
          </Grid>
        </Flex>
        <Flex gap="1rem" display={["none", "none", "flex", "flex"]}>
          <Icon as={AiOutlineSearch} fontSize="2rem" />
          <Icon as={BsCart} fontSize="2rem" />
          <NavLink to="/sign">
            <Icon as={AiOutlineUser} fontSize="2rem" />
          </NavLink>
        </Flex>
        <Flex>
          <Icon
            as={FaBars}
            fontSize="2rem"
            onClick={() => setMobile(!mobile)}
            display={["block", "block", "none", "none"]}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
