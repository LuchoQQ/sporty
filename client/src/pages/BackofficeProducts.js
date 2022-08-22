import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import API from "../api/API";
import BackofficeTable from "../components/BackofficeTable";
import { TbFaceIdError } from "react-icons/tb";
import BackofficeLayout from "../layout/BackofficeLayout";
const BackofficeProducts = () => {
  //remove
  /*   const [remove, setRemove] = useState();
  const [removing, setRemoving] = useState(false); */
  
  /* const removeItem = (item) => {
    console.log(item);
    API.DeleteProduct(item).then((res) => {
      if (res.status === 200) {
        toast({
          title: "Product deleted sucessfull",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      }
    });
  }; */
  
  // backoffice props
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState();

  //fetch products
  useEffect(() => {
    const fetchData = async () => {
      const producs = await axios
        .get("http://localhost:4000/products")
        .then((res) => {
          if (res.data.length === 0) {
            setError(true);
          } else {
            setData(res.data);
          }
        });
      setLoading(false);
    };
    fetchData();
  }, []);
  const toast = useToast();

  return (
    <>
      <Box h="15vh" />
      <BackofficeLayout data={data} loading={loading} error={error}/>
      {/* {editing === true ? (
        <Grid
          h="100vh"
          w="100vw"
          bg="#fff"
          position="absolute"
          zIndex={100}
        ></Grid>
      ) : null}
      {error === true ? (
        <Grid
          justifyContent="center"
          w="100%"
          h="80vh"
          alignContent="center"
          gap="2rem"
        >
          <Text fontSize="6xl">{`No products :/`}</Text>
          <Icon as={TbFaceIdError} justifySelf="center" h="70px" w="70px" />
          <Button onClick={() => setEditing(true)}>Create a product!</Button>
        </Grid>
      ) : null}
      {loading === false && error === false ? (
        <BackofficeTable data={data} removeItem={removeItem} />
      ) : null} */}
    </>
  );
};

export default BackofficeProducts;
