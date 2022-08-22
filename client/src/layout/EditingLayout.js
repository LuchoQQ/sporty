import { Grid } from "@chakra-ui/react";
import React from "react";

const EditingLayout = () => {
  return (
    <>
      <Grid
        h="100vh"
        w="100vw"
        bg="#fff"
        position="absolute"
        zIndex={100}
      ></Grid>
    </>
  );
};

export default EditingLayout;
