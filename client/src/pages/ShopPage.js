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
import { useSelector } from "react-redux";
import { selectFilters, selectProducts } from "../redux/reducers/productsSlice";
const ShopPage = () => {
  const products = useSelector(selectProducts);

  const [selected, setSelectedData] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();


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

  /*  useEffect(() => {
    const fetchProducts = async () => {
      await axios
        .get(`${process.env.REACT_APP_SERVER_BASE_URL}/products`)
        .then((res) => {
          const dataByPrice = res.data.filter((product) =>
            filterByPrice(product, min, max)
          );
          console.log(dataByPrice)

          const filterByCategory = () => {
            let nose = [];
            const entries = Object.entries(categories);
            const trues = entries.filter((item) => {
              if (item[1] === true) {
                return true;
              } else {
                return false;
              }
            });
            trues.filter((category) => {
              const filtered = dataByPrice.filter((product) => {
                if (product.category === category[0]) {
                  nose.push(product);
                  return true;
                } else {
                  return false;
                }
              });
            });
            setProducts(nose);
          };
          filterByCategory();

          const dataByCategory = res.data.filter((product) => {
            if (product.category === 'zapatilla') {
              return true
            } else {
              return false
            }
          })
          console.log(dataByCategory)
          setProducts(dataByCategory);
        });
    };
    fetchProducts();
  }, [min, max, categories]); */
  //
  const theme = useTheme();
  return (
    <>
      <Box h="10vh" />
      <Grid autoFlow="column">
        <SidebarLayout />
        <ProductsLayout
          products={products}
          onOpen={onOpen}
          setSelectedData={setSelectedData}
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
