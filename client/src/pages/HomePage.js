import HomeCard from "../components/HomeCard";

import { useEffect } from "react";
import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import banner from "../assets/banner1.jpg";
const HomePage = () => {
  return (
    <>
      <Box h="10vh"></Box>
      {/* <HomeCard direction={true} />
      <HomeCard direction={false} />
      <HomeCard direction={true} /> */}
      <Grid p="1rem">
        <Image src={banner} objectFit="cover" w="100vw" h="70vh" />
        <Grid autoFlow='column'>
          <Flex><Text>a</Text></Flex>
        </Grid>
      </Grid>
      <Grid p="1rem">
        <Image src={banner} objectFit="cover" w="100vw" h="70vh" />
      </Grid>
      <Grid p="1rem">
        <Image src={banner} objectFit="cover" w="100vw" h="70vh" />
      </Grid>
    </>
  );
};

export default HomePage;
