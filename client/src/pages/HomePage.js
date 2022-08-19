import HomeCard from "../components/HomeCard";
import { selectUserData } from '../redux/reducers/userSlice'
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
const HomePage = () => {
  const user = useSelector(selectUserData)
  console.log()
  return (
    <>
      {/* <Grid autoFlow="column" justifyContent="space-between" w="100vw">
        <Flex w="50vw" h="85vh">
          <Image src={nike1} fit="none" />
        </Flex>
        <Grid justifyContent="center" p="4rem">
          <Container maxW="container.sm">
            <Grid h="100%">
              <Text
                fontFamily={theme.fonts.secondary}
                fontSize="8xl"
                fontWeight="900"
                textAlign="center"
              >
                BE THE DIFFERENCE
              </Text>
              <Text
                fontSize="xl"
                fontWeight="500"
                fontFamily={theme.fonts.primary}
                color="#404040"
              >
                Deserunt ipsum reprehenderit occaecat fugiat ipsum officia do
                dolor consequat consequat aliquip aliquip. Elit consectetur non
                culpa non dolor dolor ad dolor adipisicing magna.
              </Text>
            </Grid>
          </Container>
        </Grid>
      </Grid> */}
      <Box h='10vh'></Box>
      <HomeCard direction={true} />
      <HomeCard direction={false} />
      <HomeCard direction={true} />
    </>
  );
};

export default HomePage;
