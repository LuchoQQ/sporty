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

  
  // backoffice props
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState();

  const removeItem = (item) => {
    let index = 0
    data.map((element) => {
      index++
      if(element._id === item) {
        const actualData = data.slice()
        
        const newData = actualData.splice(index- 1, 1)
        
        console.log(actualData)        

        
        setData(actualData)
      }
    })
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
  };
  
  const editItem = (item) => {
    console.log(item)
    setEditing(true)
  }

  

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
      <BackofficeLayout editing={editing} data={data} loading={loading} error={error} removeItem={removeItem} editItem={editItem}/>
      
    </>
  );
};

export default BackofficeProducts;
