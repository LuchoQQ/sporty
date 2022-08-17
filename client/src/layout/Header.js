import { Grid, Flex, Text, Link, Icon, useTheme } from "@chakra-ui/react";
import { GiRunningShoe } from "react-icons/gi";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { BsCart } from "react-icons/bs";

const Header = () => {
  const theme = useTheme();
  return (
    <>
      <Flex
        h="5vh"
        w="100vw"
        bg="#ababab"
        alignItems="center"
        justifyContent="flex-end"
        px="2rem"
        gap="2rem"
      >
        <Text>Iniciar Sesion</Text>
        <Text>Crear Cuenta</Text>
      </Flex>
      <Flex
        h="10vh"
        w="100vw"
        bg="#dedede"
        justifyContent="space-between"
        alignItems="center"
        fontFamily={theme.fonts.primary}
        fontSize="1.5rem"
        fontWeight="600"
        px="2rem"
      >
        <Flex fontSize="2.5rem">
          <Icon as={GiRunningShoe} alignSelf="center" />
          <Text>SPORTY</Text>
        </Flex>
        <Flex gap="2rem" color="#404040">
          <Text>HOME</Text>
          <Text>COLLECTION</Text>
          <Text>SHOP</Text>
        </Flex>
        <Flex gap="1rem">
          <Icon as={AiOutlineSearch} />
          <Icon as={BsCart} />
          <Icon as={AiOutlineUser} />
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
