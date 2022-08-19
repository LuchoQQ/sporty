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
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Flex,
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
import API from "../api/API";
import { useState } from "react";
import { RegisterForm, LoginForm } from "../components/SignForm";
import imagebg from '../assets/imagebg.jpg'
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
  const [login, setLogin] = useState(true);
  const user = useSelector(selectUserStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <Grid
        autoFlow="column"
        justifyContent="space-between"
        alignContent="center"
        h="100vh"
      >
        <Flex alignSelf='center'>
        <Tabs size='lg' variant='enclosed-colored' w='30vw' align='center'>
          <TabList>
            <Tab>Login</Tab>
            <Tab>Register</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <LoginForm />
            </TabPanel>
            <TabPanel>
              <RegisterForm />
            </TabPanel>
            <TabPanel>
            </TabPanel>
          </TabPanels>
        </Tabs>
        </Flex>
        <Image src={imagebg} w='60vw' h='100%' fit='cover'/>

      </Grid>
    </>
  );
};

export default SignPage;
