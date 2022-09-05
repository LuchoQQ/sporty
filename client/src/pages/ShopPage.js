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
  const [mobile, setMobile] = useState(false);
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
