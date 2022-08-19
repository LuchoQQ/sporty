import React from "react";
import {
  Grid,
  Text,
  Flex,
  Box,
  useTheme,
  Icon,
  Button,
} from "@chakra-ui/react";
import {
  MdProductionQuantityLimits,
  MdCategory,
  MdStorefront,
} from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import BackofficeCard from "../components/BackofficeCard";
const BackofficePage = () => {
  const theme = useTheme();
  return (
    <>
      <Grid h="100vh" w="100vw" justifyItems="center" alignContent="center">
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={10}
          fontFamily={theme.fonts.primary}
        >
          <BackofficeCard
            name="Products"
            icon={MdProductionQuantityLimits}
            path="/backoffice/products"
          />
          <BackofficeCard
            name="Categories"
            icon={MdCategory}
            path="/backoffice/categories"
          />
          <BackofficeCard
            name="Users"
            icon={HiUsers}
            path="/backoffice/users"
          />
          <BackofficeCard
            name="Home"
            icon={AiFillHome}
            path="/backoffice/home"
          />
          <BackofficeCard
            name="Ecommerce"
            icon={MdStorefront}
            path="/backoffice/ecommerce"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default BackofficePage;
