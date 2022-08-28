import {
  Button,
  Container,
  Grid,
  Input,
  Text,
  FormControl,
  Box,
  FormLabel,
  useToast,
  NumberInputField,
  NumberInput,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ErrorMessage, Formik } from "formik";
import React, { useEffect, useState } from "react";

const EditingLayout = ({ editItem }) => {
  const [file, setFile] = useState(null);

  const navigate = useNavigate();
  const toast = useToast();
  const uploadFile = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const formData = new FormData();
      values.image = file;
      formData.append("name", values.name);
      formData.append("category", values.category);
      formData.append("image", values.image);
      formData.append("description", values.description);
      formData.append("price", values.price);
      formData.append("stock", values.stock);
      await axios
        .post("http://localhost:4000/products", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          if (res.status === 200) {
            toast({
              title: "Product created sucessfull",
              status: "success",
              duration: 2000,
              isClosable: true,
            });
            editItem();
          }
        })
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Grid h="100vh" w="100vw" bg="#fff">
        <Container>
          <Grid>
            <Formik
              initialValues={{
                name: "",
                category: "",
                image: "",
                description: "",
                price: "",
                stock: "",
              }}
              onSubmit={onSubmit}
            >
              {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Container>
                  <FormControl as="form" onSubmit={handleSubmit}>
                    <Grid alignContent="center" gap="2rem">
                      <Box>
                        <FormLabel fontSize="xl">Name</FormLabel>
                        <Input
                          type="text"
                          name="name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        <ErrorMessage name="email" component="div">
                          {(msg) => <Text color="red">{msg}</Text>}
                        </ErrorMessage>
                      </Box>
                      <Box>
                        <FormLabel fontSize="xl">Category</FormLabel>
                        <Input
                          type="text"
                          name="category"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                        <ErrorMessage name="password" component="div">
                          {(msg) => <Text color="red">{msg}</Text>}
                        </ErrorMessage>
                      </Box>
                      <Box>
                        <FormLabel fontSize="xl">Description</FormLabel>
                        <Input
                          type="text"
                          name="description"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                        <ErrorMessage name="password" component="div">
                          {(msg) => <Text color="red">{msg}</Text>}
                        </ErrorMessage>
                      </Box>
                      <Box>
                        <FormLabel fontSize="xl">Number</FormLabel>
                        <NumberInput>
                          <NumberInputField
                            precision={1} 
                            name="price"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                          />
                        </NumberInput>
                        <ErrorMessage name="password" component="div">
                          {(msg) => <Text color="red">{msg}</Text>}
                        </ErrorMessage>
                      </Box>
                      <Box>
                        <FormLabel fontSize="xl">Stock</FormLabel>
                        <Input
                          type="number"
                          name="stock"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                        <ErrorMessage name="password" component="div">
                          {(msg) => <Text color="red">{msg}</Text>}
                        </ErrorMessage>
                      </Box>
                      <Box>
                        <FormLabel fontSize="xl">Image</FormLabel>
                        <Input
                          type="file"
                          name="image"
                          onChange={(e) => uploadFile(e)}
                        />
                        <ErrorMessage name="password" component="div">
                          {(msg) => <Text color="red">{msg}</Text>}
                        </ErrorMessage>
                      </Box>

                      <Button type="submit" isLoading={isSubmitting}>
                        Submit
                      </Button>
                    </Grid>
                  </FormControl>
                </Container>
              )}
            </Formik>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default EditingLayout;
