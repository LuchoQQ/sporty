import {
  Grid,
  FormControl,
  FormLabel,
  Input,
  Container,
  Box,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import {
  logout,
  setUserData,
  selectUserStatus,
} from "../redux/reducers/userSlice";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import nike3 from "../assets/nike1.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

const SignPage = () => {
  const user = useSelector(selectUserStatus);
  const dispatch = useDispatch();
  console.log(user);
  const navigate = useNavigate();
  return (
    <>
      <Grid autoFlow="column" justifyContent="space-between">
        <Grid w="40vw" h="90vh">
          <Formik
            initialValues={{ username: "", email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              axios
                .post(
                  `${process.env.REACT_APP_SERVER_BASE_URL}/auth/register`,
                  values
                )
                .then((res) => {
                  if (res.status === 200) {
                    window.localStorage.setItem("token", res.data.token);
                    try {
                      axios
                        .get(
                          `${process.env.REACT_APP_SERVER_BASE_URL}/auth/me`,
                          {
                            headers: {
                              Authorization: `Bearer ${localStorage.getItem(
                                "token"
                              )}`,
                            },
                          }
                        )
                        .then((res) => {
                          //console.log(res);
                        });
                    } catch (error) {}
                    navigate("/");
                    window.location.reload()
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
                  <Grid h="90vh" alignContent="center" gap="2rem">
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
