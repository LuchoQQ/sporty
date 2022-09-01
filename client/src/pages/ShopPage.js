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
import ProductsLayout from "../layout/ProductsLayout";
import { filterByPrice } from "../utils/filters/filter";
const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [selected, setSelectedData] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(900000);

  const [categories, setCategories] = useState();

  /*   const filter = {
    prices: {
      min: min,
      max: max,
    },
    categories: ['zapatillas'],
    model: []
  }


  if (categories.length !== 0) {

  } */

  useEffect(() => {
    const fetchProducts = async () => {
      await axios
        .get(`${process.env.REACT_APP_SERVER_BASE_URL}/products`)
        .then((res) => {
          const dataByPrice = res.data.filter((product) =>
            filterByPrice(product, min, max)
          );

          setProducts(dataByPrice);
        });
    };
    console.log(categories)
    fetchProducts();
  }, [max]);

  const theme = useTheme();
  return (
    <>
      <Box h="10vh" />
      <Grid autoFlow="column">
        <SidebarLayout setMin={setMin} setMax={setMax} />
        <ProductsLayout
          products={products}
          onOpen={onOpen}
          setSelectedData={setSelectedData}
          setCategories={setCategories}
          categories={categories}
        />
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
