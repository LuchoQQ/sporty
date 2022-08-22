import { Box, Grid, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BackofficeTable from "../components/BackofficeTable";
const BackofficeProducts = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  //remove
  const [remove, setRemove] = useState()
  const [removing, setRemoving] = useState(false)


  const removeItem = (item) => {
    setRemoving(true)
    setRemove(item)
  }
  //editing




  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:4000/products")
        .then((res) => setData(res.data));
      setLoading(false);
    };
    fetchData();
  }, []);


  return (
    <>
      <Box h="15vh" />
      {removing === true ? <Grid h='100vh' w='100vw' bg='red'></Grid> : null}
      {loading === false ? <BackofficeTable data={data} removeItem={removeItem}/> : null}
    </>
  );
};

export default BackofficeProducts;
