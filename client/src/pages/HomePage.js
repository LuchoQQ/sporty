import HomeCard from "../components/HomeCard";

import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
const HomePage = () => {
  return (
    <>
      <Box h="10vh"></Box>
      <HomeCard direction={true} />
      <HomeCard direction={false} />
      <HomeCard direction={true} />
    </>
  );
};

export default HomePage;
