import { Grid, Flex, Text, useTheme, Container, Image } from "@chakra-ui/react";
import nike1 from "../assets/nike1.jpg";
const HomeCard = () => {
  const theme = useTheme();

  return (
    <>
      <Flex w="100vw" h="85vh" flexDir="row-reverse">
        <Flex justifyContent="center">
          <Image src={nike1} fit="none" w="50vw" />
        </Flex>
        <Flex w="50vw">
          <Container maxW="container.sm">
            <Grid h="100%">
              <Text
                fontFamily={theme.fonts.secondary}
                fontSize="8xl"
                fontWeight="900"
                textAlign="center"
                alignSelf="center"
              >
                BE THE DIFFERENCE
              </Text>
              <Text
                fontSize="2xl"
                fontWeight="500"
                fontFamily={theme.fonts.primary}
                color="#404040"
                alignSelf="center"
                textAlign="center"
              >
                Deserunt ipsum reprehenderit occaecat fugiat ipsum officia do
                dolor consequat consequat aliquip aliquip. Elit consectetur non
                culpa non dolor dolor ad dolor adipisicing magna.
              </Text>
            </Grid>
          </Container>
        </Flex>
      </Flex>
    </>
  );
};

export default HomeCard