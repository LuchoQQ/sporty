import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Grid,
  Image,
  Text,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import React from "react";

const DrawerLayout = ({ selected, isOpen, onClose }) => {
  const btnRef = React.useRef();
  const theme = useTheme();
  return (
    <Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent h="90vh" mt="10vh">
          <DrawerCloseButton />

          <Container>
            <Flex flexDir="column" h="100%" justifyContent="space-between">
              <Flex justifySelf="center">
                <Image
                  src={`${process.env.REACT_APP_SERVER_BASE_URL}/products/image/${selected?.image}`}
                />
              </Flex>
              <Grid py="1rem" gap="1rem">
                <Text fontSize="xl" fontFamily={theme.fonts.primary}>
                  {selected?.name}
                </Text>
                <Text>{selected?.description}</Text>
                <Text
                  fontSize="2xl"
                  mt="1rem"
                  fontFamily={theme.fonts.primary}
                >{`€ ${selected?.price * 239}`}</Text>
              </Grid>
              <Box>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue">Submit</Button>
              </Box>
            </Flex>
          </Container>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default DrawerLayout;
