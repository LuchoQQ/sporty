import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Text,
} from "@chakra-ui/react";
import { ErrorMessage, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import React from "react";
import axios from "axios";
import API from "../api/API";

export const RegisterForm = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(4, "The username must have between 4 and 10 characters")
      .max(10, "The username must have between 4 and 10 characters")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(7, "The password must have at least 7 characters")
      .required("Required"),
  });

  return (
    <Grid>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          API.Register(values).then((res) => {
            if (res.status === 200) {
              window.localStorage.setItem("token", res.data.token);
              axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/auth/me`, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              });
              navigate("/");
              window.location.reload();
            }
          });
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
              <Grid alignContent="center" gap="2rem">
                <Box>
                  <FormLabel fontSize="2xl">Username</FormLabel>
                  <Input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                  />
                  <ErrorMessage name="username" component="div">
                    {(msg) => <Text color="red">{msg}</Text>}
                  </ErrorMessage>
                </Box>
                {/*  */}
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
                <Button type="submit" isLoading={isSubmitting}>
                  Submit
                </Button>
              </Grid>
            </FormControl>
          </Container>
        )}
      </Formik>
    </Grid>
  );
};

export const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            try {
              API.Login(values).then((res) => {
                console.log(res)
                localStorage.setItem("token", res.data.token);
                navigate("/");
                window.location.reload();
              });
            } catch (error) {
              console.log(error)
            }
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
                <Grid alignContent="center" gap="2rem">
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
                  <Button type="submit" isLoading={isSubmitting}>
                    Submit
                  </Button>
                </Grid>
              </FormControl>
            </Container>
          )}
        </Formik>
      </Grid>
      ;
    </>
  );
};
