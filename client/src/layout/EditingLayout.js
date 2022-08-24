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
import { ErrorMessage, Formik } from "formik";
import React, { useEffect } from "react";

const EditingLayout = () => {
  useEffect(() => {

  }, []);
  return (
    <>
      <Grid h="100vh" w="100vw" bg="#fff" zIndex={100}>
        <Container>
          <Grid>
            <Formik
              initialValues={{ name: "", category: "", description: "", price: "", stock: "", image: "" }}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
              }}
            >
              {({
                values,

                handleChange,

                handleBlur,

                handleSubmit,

                isSubmitting,

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
                          type="text"
                          name="image"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
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
