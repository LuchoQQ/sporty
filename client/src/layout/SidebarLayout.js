import {
  Container,
  Divider,
  Grid,
  Text,
  Box,
  Radio,
  RadioGroup,
  Stack,
  VStack,
  CheckboxGroup,
  Checkbox,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { BsArrowReturnRight } from "react-icons/bs";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilters,
  setCategory,
  setPrice,
} from "../redux/reducers/productsSlice";

const SidebarLayout = () => {
  const [value, setValue] = useState("1");
  const [mobile, setMobile] = useState(false);
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  return (
    <>
      {/* <Divider /> */}
      <Grid
        w={[
          mobile ? "100vw" : "10vw",
          mobile ? "100vw" : "7vw",
          mobile ? "100vw" : "7vw",
          "15vw",
          "15vw",
        ]}
        position="grid"
        h="auto"
        borderRight="1px solid #dedede"
        transition="all .3s ease"
        zIndex={200}
        alignContent='start'
      >
        <Icon
          as={BsArrowReturnRight}
          display={["block", "block", "block", "none", "none"]}
          fontSize="4xl"
          justifySelf="center"
          onClick={() => setMobile(!mobile)}
        ></Icon>
        <Box>
          <Container
            py="2rem"
            position="relative"
            ml={["5vw", "0"]}
            left={[
              mobile ? "0" : "-20vw",
              mobile ? "0" : "-20vw",
              mobile ? "0" : "-20vw",
              "0vw",
              "0vw",
            ]}
            mt='5vh'
          >
            <Box>
              <Text
                fontSize={["md", "md", "md", "md", "md", "xl"]}
                fontWeight="600"
              >
                Categories +
              </Text>
              <Divider mb="1rem" />
              <Grid gap="1rem" mb="1rem">
                <CheckboxGroup>
                  <Checkbox
                    onChange={() => {
                      dispatch(
                        setCategory({
                          ...filters.categories,
                          zapatilla:
                            filters.categories.zapatilla === false
                              ? true
                              : false,
                        })
                      );
                    }}
                  >
                    <Text fontSize={["lg", "lg", "lg", "lg", "sm", "xl"]}>
                      Zapatillas
                    </Text>
                  </Checkbox>
                  <Checkbox
                    onChange={() => {
                      dispatch(
                        setCategory({
                          ...filters.categories,
                          botin:
                            filters.categories.botin === false ? true : false,
                        })
                      );
                    }}
                  >
                    <Text fontSize={["lg", "lg", "lg", "lg", "sm", "xl"]}>
                      Botines
                    </Text>
                  </Checkbox>
                  <Checkbox
                    onChange={() => {
                      dispatch(
                        setCategory({
                          ...filters.categories,
                          remera:
                            filters.categories.remera === false ? true : false,
                        })
                      );
                    }}
                  >
                    <Text fontSize={["lg", "lg", "lg", "lg", "sm", "xl"]}>
                      Remeras
                    </Text>
                  </Checkbox>
                </CheckboxGroup>
              </Grid>
              <Text
                fontSize={["md", "md", "md", "md", "md", "xl"]}
                fontWeight="600"
              >
                Company +
              </Text>
              <Divider mb="1rem" />
              <Grid gap="1rem" mb="1rem">
                <CheckboxGroup>
                  <Checkbox>
                    <Text fontSize={["lg", "lg", "lg", "lg", "sm", "xl"]}>
                      Nike
                    </Text>
                  </Checkbox>
                  <Checkbox>
                    <Text fontSize={["lg", "lg", "lg", "lg", "sm", "xl"]}>
                      Adidas
                    </Text>
                  </Checkbox>
                  <Checkbox>
                    <Text fontSize={["lg", "lg", "lg", "lg", "sm", "xl"]}>
                      Fila
                    </Text>
                  </Checkbox>
                  <Checkbox>
                    <Text fontSize={["lg", "lg", "lg", "lg", "sm", "xl"]}>
                      Jaguar
                    </Text>
                  </Checkbox>
                  <Checkbox>
                    <Text fontSize={["lg", "lg", "lg", "lg", "sm", "xl"]}>
                      Puma
                    </Text>
                  </Checkbox>
                </CheckboxGroup>
              </Grid>
              <Text
                fontSize={["md", "md", "md", "md", "md", "xl"]}
                fontWeight="600"
              >
                Price +
              </Text>
              <Divider mb="1rem" />
              <Grid gap="1rem" mb="1rem">
                <RadioGroup onChange={setValue} value={value}>
                  <Grid gap="1rem">
                    <Radio value="1">
                      <Text
                        fontSize={["lg", "lg", "lg", "lg", "sm", "xl"]}
                        onClick={() => {
                          dispatch(setPrice({ min: 0, max: 9999999 }));
                        }}
                      >
                        No Range
                      </Text>
                    </Radio>
                    <Radio value="2">
                      <Text
                        fontSize={["lg", "lg", "lg", "lg", "sm", "xl"]}
                        onClick={() => {
                          dispatch(setPrice({ min: 0, max: 100 }));
                        }}
                      >
                        0 - 99
                      </Text>
                    </Radio>
                    <Radio value="3">
                      <Text
                        fontSize={["lg", "lg", "lg", "lg", "sm", "xl"]}
                        onClick={() => {
                          dispatch(setPrice({ min: 100, max: 200 }));
                        }}
                      >
                        100 - 199
                      </Text>
                    </Radio>
                    <Radio value="4">
                      <Text
                        fontSize={["lg", "lg", "lg", "lg", "sm", "xl"]}
                        onClick={() => {
                          dispatch(setPrice({ min: 200, max: 300 }));
                        }}
                      >
                        200 - 299
                      </Text>
                    </Radio>
                  </Grid>
                </RadioGroup>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Grid>
    </>
  );
};

export default SidebarLayout;
