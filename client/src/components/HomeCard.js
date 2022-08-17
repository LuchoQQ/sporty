import {
  Grid,
  Flex,
  Text,
  useTheme,
  Container,
  Image,
  Box,
} from "@chakra-ui/react";
import nike1 from "../assets/nike1.jpg";
const HomeCard = ({ direction }) => {
  const theme = useTheme();

  return (
    <>
      <Flex
        w="100vw"
        h="90vh"
        flexDir={direction ? "row-reverse" : "row"}
        justifyContent="space-between"
      >
        <Flex justifyContent="center" w="45vw">
          <Image src={nike1} fit="contain" />
        </Flex>
        <Flex w="40vw">
          <Grid h="100%" px="3rem">
            <Container maxW="container.sm">
              <Grid h="100%" alignContent="center" gap="4rem">
                <Box>
                  <Text
                    fontFamily={theme.fonts.secondary}
                    fontSize="6xl"
                    color="#000"
                  >
                    BE THE
                  </Text>
                  <Text
                    fontFamily={theme.fonts.secondary}
                    fontSize="6xl"
                    color="#802020"
                  >
                    DIFERRENCE
                  </Text>
                </Box>
                <Text
                  fontSize="xl"
                  fontFamily={theme.fonts.primary}
                  color="#707070"
                  alignSelf="center"
                >
                  Deserunt ipsum reprehenderit occaecat fugiat ipsum officia do
                  dolor consequat consequat aliquip aliquip. Elit consectetur
                  non culpa non dolor dolor ad dolor adipisicing magna.
                </Text>
                <Flex p="1rem" w="50%" justifyContent="center" bg="#000">
                  <Text fontSize="1.5rem" color="#dedede">
                    Ver más
                  </Text>
                </Flex>
              </Grid>
            </Container>
          </Grid>
        </Flex>
      </Flex>
    </>
  );
};

export default HomeCard;
