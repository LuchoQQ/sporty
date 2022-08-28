import { Button, Grid, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { TbFaceIdError } from "react-icons/tb";

const ErrorLayout = ({editItem}) => {
  return (
    <>
      <Grid
        justifyContent="center"
        w="100%"
        h="80vh"
        alignContent="center"
        gap="2rem"
      >
        <Text fontSize="6xl">{`No products :/`}</Text>
        <Icon as={TbFaceIdError} justifySelf="center" h="70px" w="70px" />
        <Button onClick={() => editItem()}>Create a product!</Button>
      </Grid>
    </>
  );
};

export default ErrorLayout;
