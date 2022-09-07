import HomeCard from "../components/HomeCard";

import { useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Text,
  useTheme,
} from "@chakra-ui/react";
import banner from "../assets/banner1.jpg";
const HomePage = () => {
  const theme = useTheme();
  return (
    <>
      <Box h="10vh"></Box>
      {/* <HomeCard direction={true} />
      <HomeCard direction={false} />
      <HomeCard direction={true} /> */}
      <Box p="1rem">
        <Grid w="100vw">
          <Image src={banner} objectFit="cover" w="100vw" h="60vh" />
          <Flex position="relative" zIndex={100} top="-150%" ml="5%">
            <Text
              fontSize="2xl"
              py=".5rem"
              px="1rem"
              bg="#fff"
              borderRadius="50px"
              fontFamily={theme.fonts.primary}
            >
              Ver más
            </Text>
          </Flex>
        </Grid>
      </Box>
      <Box p="1rem">
        <Grid w="100vw">
          <Image src={banner} objectFit="cover" w="100vw" h="60vh" />
          <Flex position="relative" zIndex={100} top="-150%" ml="5%">
            <Text
              fontSize="2xl"
              py=".5rem"
              px="1rem"
              bg="#fff"
              borderRadius="50px"
              fontFamily={theme.fonts.primary}
            >
              Ver más
            </Text>
          </Flex>
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
