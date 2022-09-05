import { Button, Flex, Grid, Image, Text, useTheme } from "@chakra-ui/react";
import React from "react";

function ProductCard({ product, setSelectedData, onOpen }) {
  const theme = useTheme();

  return (
    <>
      <Grid
        _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        w={["200px","200px","200px","280px","270px", "330px", "350px"]}
        transition="all .3s ease"
        justifyContent="center"
        justifySelf='center'
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
          <Text fontSize="2xl" mt="1rem" fontFamily={theme.fonts.primary}>{`€ ${
            product.price
          }`}</Text>
          <Text fontSize="xl" color="green">
            Hasta 6 cuotas sin interes
          </Text>
          <Flex gap={5} mt="1rem">
            <Button
              onClick={(e) => {
                setSelectedData(product);
                onOpen();
              }}
            >
              Ver más
            </Button>
            <Button>Agregar al carrito</Button>
          </Flex>
        </Grid>
      </Grid>
    </>
  );
}

export default ProductCard;
