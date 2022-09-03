import { Grid } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { selectFilters } from "../redux/reducers/productsSlice";

function ProductsLayout({ products, onOpen, setSelectedData }) {
  var filtered = products;

  const filters = useSelector(selectFilters);

  //filters

  //filter by price
  const price = filters.price;

  const filterByPrice = () => {
    const filter = filtered.filter((item) => {
      if (item.price >= price.min && item.price <= price.max) {
        return true;
      } else {
        return false;
      }
    });
    filtered = filter;
  };

  filterByPrice();

  //filter by category

  const categories = filters.categories;

  const filterByCategory = () => {
    let arr = Object.entries(categories);

    let filtersCategory = [];
    const activeCategories = arr.filter((item) => {
      if (item[1]) {
        filtersCategory.push(item[0]);
      } else {
        return false;
      }
    });

    if (filtersCategory.length >= 1) {
      var res = filtered.filter(function (product) {
        return filtersCategory.indexOf(product.category) >= 0;
      });
      filtered = res;
    }
  };
  filterByCategory();

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
      {filtered.map((product, index) => {
        return (
          <ProductCard
            key={index}
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
