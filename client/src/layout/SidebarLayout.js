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

const SidebarLayout = ({ setMin, setMax, setCategories, categories }) => {
  const [value, setValue] = React.useState("1");
  const navigate = useNavigate();

  const onChange = () => {
    setCategories('xd')
  }
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
                <Checkbox onChange={() => console.log('xd')}>
                  <Text>Zapatillas</Text>
                </Checkbox>
                <Checkbox onClick={() => setCategories(["Botines", ...categories])}>
                  <Text>Botines</Text>
                </Checkbox>
                <Checkbox onClick={() => setCategories(["Remeras", ...categories])}>
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
                        setMin(0);
                        setMax(999999999);
                      }}
                    >
                      No Range
                    </Text>
                  </Radio>
                  <Radio value="2">
                    <Text
                      onClick={() => {
                        setMin(0);
                        setMax(100);
                      }}
                    >
                      0 - 99
                    </Text>
                  </Radio>
                  <Radio value="3">
                    <Text
                      onClick={() => {
                        setMin(100);
                        setMax(200);
                      }}
                    >
                      100 - 199
                    </Text>
                  </Radio>
                  <Radio value="4">
                    <Text
                      onClick={() => {
                        setMin(200);
                        setMax(300);
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
