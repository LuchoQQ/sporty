import { formAnatomy, formErrorAnatomy } from "@chakra-ui/anatomy";
import {
  Grid,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Container,
  FormErrorMessage,
  Box,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import nike3 from "../assets/nike1.jpg";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "The name must have between 4 and 10 characters")
    .max(10, "The name must have between 4 and 10 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(7, "The password must have at least 4 characters")
    .required("Required"),
});

const SignPage = () => {
  return (
    <>
      <Grid autoFlow="column" justifyContent="space-between">
        <Grid w="40vw" h="90vh">
          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setSubmitting(false);
            }}
          >
            {({
              values,

              errors,

              touched,

              handleChange,

              handleBlur,

              handleSubmit,

              isSubmitting,

              /* and other goodies */
            }) => (
              <Container>
                <FormControl as="form" onSubmit={handleSubmit}>
                  <Grid h="90vh" alignContent="center" gap="2rem">
                    <Box>
                      <FormLabel fontSize="2xl">Name</FormLabel>
                      <Input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                      <ErrorMessage name="name" component="div">
                        {(msg) => <Text color="red">{msg}</Text>}
                      </ErrorMessage>
                    </Box>
                    <Box>
                      <FormLabel fontSize="2xl">Email</FormLabel>
                      <Input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <ErrorMessage name="email" component="div">
                        {(msg) => <Text color="red">{msg}</Text>}
                      </ErrorMessage>
                    </Box>
                    <Box>
                      <FormLabel fontSize="2xl">Password</FormLabel>
                      <Input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      <ErrorMessage name="password" component="div">
                        {(msg) => <Text color="red">{msg}</Text>}
                      </ErrorMessage>
                    </Box>
                    <Button type="submit" disabled={isSubmitting}>
                      Submit
                    </Button>
                  </Grid>
                </FormControl>
              </Container>
            )}
          </Formik>
        </Grid>
        <Grid
          w="40vw"
          h="90vh"
          justifyContent="center"
          alignContent="center"
          transform="rotate(90deg)"
        >
          <Image src={nike3} fit="none" w="50vw" h="90vh" />
        </Grid>
      </Grid>
    </>
  );
};

export default SignPage;
