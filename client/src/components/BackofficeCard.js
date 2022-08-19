import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
const BackofficeCard = ({ name, icon, path }) => {
  const navigate = useNavigate();
  return (
    <Flex
      flexDir="column"
      w="12rem"
      h="12rem"
      rounded="15px"
      border="1px solid black"
      justifyContent="center"
      alignContent="center"
      gap="1rem"
      p="1rem"
    >
      <Text textAlign="center" fontSize="xl">
        {name}
      </Text>
      <Icon as={icon} justifySelf="center" w="100%" fontSize="4xl" />
      <Button onClick={() => navigate(path)}>{name}</Button>
    </Flex>
  );
};

export default BackofficeCard;
