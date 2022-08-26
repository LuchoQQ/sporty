import {
  Button,
  Container,
  Grid,
  Input,
  VStack,
  Text,
  FormControl,
  GridItem,
  Box,
  FormLabel,
} from "@chakra-ui/react";
import axios from "axios";
import { ErrorMessage, Formik } from "formik";
import React, { useEffect, useState } from "react";

const EditingLayout = () => {
  const [file, setFile] = useState(null);

  //  useEffect(() => {}, []);

  /*   const getBase64 = (file) => {
    return new Promise((resolve) => {
      let fileInfo;
      let baseURL;
      let reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        baseURL = reader.result;
        setBase64URL(baseURL);
      };
    });
  }; */

  /*  const onSubmit = (e) => {
     let res;
    const file = e.target.files[0];

    getBase64(file)
      .then((result) => {
        file["base64"] = result;
        setBase64URL(file.base64);
      })
      .catch((err) => {
        console.log(err);
      });
    return res;
  }; */

  const uploadFile = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const onSubmit = async () => {
    /* try {
      const response = await axios
        .post("http://localhost:4000/products", file, {
          "Content-Type": "multipart/form-data",
        })
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    } */
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
              onSubmit={async (values, { setSubmitting }) => {
                try {
                  const formData = new FormData()
                  values.image = file
                  /* const url = await axios.get("http://localhost:4000/products/s3Url").then(res => {return res.data.url.split('/')[3].split('?')[0]})
                  values.image = url */
                  formData.append("name",values.name)
                  formData.append("category",values.category)
                  formData.append("image",values.image)
                  formData.append("description", values.description)
                  formData.append("price", values.price)
                  formData.append("stock", values.stock)

                  await axios.post('http://localhost:4000/products', formData, { headers: { "Content-Type": "multipart/form-data" } }).then(res => console.log(res))
                } catch (error) {
                  console.log(error)
                }
                try {
                  //axios.post("http://localhost:4000/products", {});
                } catch (error) {}
                /* const data = new FormData();
                data.append("file", {
                  ...values,
                  file,
                });
                let url = "http://localhost:4000/products";
                axios
                  .post(url, data, {
                    headers: {
                      "content-type": "multipart/form-data",
                    },
                  })
                  .then((res) => console.log(res));
                setSubmitting(true); */
              }}
            >
              {({
                values,

                handleChange,

                handleBlur,

                handleSubmit,

                isSubmitting,

                setFieldValue,

                /* and other goodies */
              }) => (
                <Container>
                  <FormControl as="form" onSubmit={handleSubmit}>
                    <Grid alignContent="center" gap="2rem">
                      <Box>
                        <FormLabel fontSize="2xl">Name</FormLabel>
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
                        <FormLabel fontSize="2xl">Category</FormLabel>
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
                        <FormLabel fontSize="2xl">Description</FormLabel>
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
                        <FormLabel fontSize="2xl">Number</FormLabel>
                        <Input
                          type="number"
                          name="price"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                        <ErrorMessage name="password" component="div">
                          {(msg) => <Text color="red">{msg}</Text>}
                        </ErrorMessage>
                      </Box>
                      <Box>
                        <FormLabel fontSize="2xl">Stock</FormLabel>
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
                        <FormLabel fontSize="2xl">Image</FormLabel>
                        <Input
                          type="file"
                          name="image"
                          onChange={(e) => {
                            //console.log(e.target.files[0])
                            uploadFile(e)
                          }}
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
