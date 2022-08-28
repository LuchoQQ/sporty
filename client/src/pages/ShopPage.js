import { Box, Grid, HStack, Image, Text, VStack, useTheme } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";


const ShopPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      await axios
        .get(`${process.env.REACT_APP_SERVER_BASE_URL}/products`)
        .then((res) => setProducts(res.data));
    };
    fetchProducts()
  }, []);

  const theme = useTheme()

  return (
    <>
      <Box h="10vh" />
      <Grid autoFlow="column">
        <Grid w="15vw" position="fixed" h="90vh" bg="#dedede">
          {" "}
          XD
        </Grid>
        <Grid w="85vw" minH="100vh" ml="15vw" templateColumns='repeat(3, 350px)' gap={10} justifyContent='center' py='5vh'>
          {products.map((product) => {
            console.log(product);
            return (
              <>
                <Grid _hover={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} w='350px' transition='all .3s ease' justifyContent='center'>
                  <Image
                    src={`${process.env.REACT_APP_SERVER_BASE_URL}/products/image/${product.image}`}
                    justifySelf='center'
                  />
                  <Grid w='100%' gap={2} mt='1rem' px='1rem' fontFamily={theme.fonts.primary}>
                    <Text fontSize='lg'>{product.name}</Text>
                    <Text fontSize='lg' color='#707070'>{product.category}</Text>
                    <Text fontSize='lg' mt='1rem'>{`€ ${product.price}`}</Text>
                  </Grid>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default ShopPage;
