import {
  Box,
  Grid,
  Image,
  Text,
  Button,
  Flex,
  useTheme,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DrawerLayout from "../layout/DrawerLayout";
import SidebarLayout from "../layout/SidebarLayout";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [selected, setSelectedData] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const fetchProducts = async () => {
      await axios
        .get(`${process.env.REACT_APP_SERVER_BASE_URL}/products`)
        .then((res) => setProducts(res.data));
    };
    fetchProducts();
  }, []);

  const theme = useTheme();
  return (
    <>
      <Box h="10vh" />
      <Grid autoFlow="column">
        <SidebarLayout />
        <Grid
          w="85vw"
          minH="100vh"
          ml="15vw"
          templateColumns="repeat(3, 350px)"
          gap={10}
          justifyContent="center"
          py="5vh"
        >
          {products.map((product) => {
            return (
              <>
                <Grid
                  _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  w="350px"
                  transition="all .3s ease"
                  justifyContent="center"
                  role="group"
                >
                  <Image
                    src={`${process.env.REACT_APP_SERVER_BASE_URL}/products/image/${product.image}`}
                    justifySelf="center"
                  />
                  <Grid w="100%" px="1rem" pb="1rem">
                    <Text fontSize="xl" fontFamily={theme.fonts.primary}>
                      {product.name}
                    </Text>
                    <Text
                      fontSize="2xl"
                      mt="1rem"
                      fontFamily={theme.fonts.primary}
                    >{`€ ${product.price * 239}`}</Text>
                    <Text fontSize="xl" color="green">
                      Hasta 6 cuotas sin interes
                    </Text>
                    <Flex gap={5} mt="1rem">
                      <Button onClick={(e) => {
                        setSelectedData(product)
                        onOpen()
                      }}>Ver más</Button>
                      <Button>Agregar al carrito</Button>
                    </Flex>
                  </Grid>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Grid>
      <DrawerLayout
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        selected={selected}
      />
    </>
  );
};

export default ShopPage;
