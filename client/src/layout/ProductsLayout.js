import { Grid } from "@chakra-ui/react";
import React from "react";
import ProductCard from "../components/ProductCard";

function ProductsLayout({ products, onOpen, setSelectedData }) {
  return (
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
          <ProductCard
            product={product}
            onOpen={onOpen}
            setSelectedData={setSelectedData}
          />
        );
      })}
    </Grid>
  );
}

export default ProductsLayout;
