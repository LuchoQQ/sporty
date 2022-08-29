import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Container,
  Divider,
  Grid,
  Text,
  Box,
  HStack,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const SidebarLayout = () => {
  return (
    <>
      <Divider />
      <Grid
        w="15vw"
        position="fixed"
        h="90vh"
        borderRight="1px solid #dedede"
        alignContent="center"
      >
        <Container>
          <Box>
            <Text fontSize="xl" fontWeight="600">
              Categories +
            </Text>
            <Divider mb="1rem" />
            <Grid gap="1rem" mb="1rem">
              <Text>Zapatillas</Text>
              <Text>Botines</Text>
              <Text>Remeras</Text>
            </Grid>
            <Text fontSize="xl" fontWeight="600">
              Company +
            </Text>
            <Divider mb="1rem" />
            <Grid gap="1rem" mb="1rem">
              <Text>Nike</Text>
              <Text>Adidas</Text>
              <Text>Fila</Text>
              <Text>Jaguar</Text>
              <Text>Puma</Text>
            </Grid>
            <Text fontSize="xl" fontWeight="600">
              Price +
            </Text>
            <Divider mb="1rem" />
            <Grid gap="1rem" mb="1rem">
              <Text>0 - 99</Text>
              <Text>100 - 199</Text>
              <Text>200 - 299</Text>
            </Grid>
          </Box>
        </Container>
      </Grid>
    </>
  );
};

export default SidebarLayout;
