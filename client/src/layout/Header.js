import { Flex, Text, Icon, useTheme } from "@chakra-ui/react";
import { GiRunningShoe } from "react-icons/gi";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [scroll, setScroll] = useState(0)
  const theme = useTheme();
  const onScroll = () => {
    setScroll(window.scrollY)
  };
  window.addEventListener("scroll", onScroll);
  
  return (
    <>
      <Flex
        position='fixed'
        h="10vh"
        w="100vw"
        bg={scroll > 0 ? '#dedede' : '#fff'}
        justifyContent="space-between"
        alignItems="center"
        fontFamily={theme.fonts.primary}
        fontSize="1.5rem"
        px="2rem"
        transition='all 1s ease'
      >
        <Flex fontSize="2.5rem">
          <Icon as={GiRunningShoe} alignSelf="center" />
          <Text fontFamily={theme.fonts.secondary}>SPORTY</Text>
        </Flex>
        <Flex gap="2rem">
          <Navbar />
        </Flex>
        <Flex gap="1rem">
          <Icon as={AiOutlineSearch} fontSize="2rem" />
          <Icon as={BsCart} fontSize="2rem" />
          <NavLink to="/sign">
            <Icon as={AiOutlineUser} fontSize="2rem" />
          </NavLink>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
