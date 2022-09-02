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
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilters,
  setCategory,
  setPrice,
} from "../redux/reducers/productsSlice";

const SidebarLayout = () => {
  const [value, setValue] = React.useState("1");
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  return (
    <>
      <Divider />
      <Grid
        w="15vw"
        position="fixed"
        h="90vh"
        borderRight="1px solid #dedede"
        alignContent="center"
      >
        <Container>
          <Box>
            <Text fontSize="xl" fontWeight="600">
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
                          filters.categories.zapatilla === false ? true : false,
                      })
                    );
                  }}
                >
                  <Text>Zapatillas</Text>
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
                  <Text>Botines</Text>
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
                  <Text>Remeras</Text>
                </Checkbox>
              </CheckboxGroup>
            </Grid>
            <Text fontSize="xl" fontWeight="600">
              Company +
            </Text>
            <Divider mb="1rem" />
            <Grid gap="1rem" mb="1rem">
              <CheckboxGroup>
                <Checkbox>
                  <Text>Nike</Text>
                </Checkbox>
                <Checkbox>
                  <Text>Adidas</Text>
                </Checkbox>
                <Checkbox>
                  <Text>Fila</Text>
                </Checkbox>
                <Checkbox>
                  <Text>Jaguar</Text>
                </Checkbox>
                <Text>Puma</Text>
              </CheckboxGroup>
            </Grid>
            <Text fontSize="xl" fontWeight="600">
              Price +
            </Text>
            <Divider mb="1rem" />
            <Grid gap="1rem" mb="1rem">
              <RadioGroup onChange={setValue} value={value}>
                <Grid gap="1rem">
                  <Radio value="1">
                    <Text
                      onClick={() => {
                        dispatch(setPrice({ min: 0, max: 9999999 }));
                      }}
                    >
                      No Range
                    </Text>
                  </Radio>
                  <Radio value="2">
                    <Text
                      onClick={() => {
                        dispatch(setPrice({ min: 0, max: 100 }));
                      }}
                    >
                      0 - 99
                    </Text>
                  </Radio>
                  <Radio value="3">
                    <Text
                      onClick={() => {
                        dispatch(setPrice({ min: 100, max: 200 }));
                      }}
                    >
                      100 - 199
                    </Text>
                  </Radio>
                  <Radio value="4">
                    <Text
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
      </Grid>
    </>
  );
};

export default SidebarLayout;
