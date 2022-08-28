import React from "react";
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Link,
  Icon,
  Flex,
  Button,
  Text,
} from "@chakra-ui/react";
import { AiFillFileImage, AiOutlineEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
const BackofficeTable = ({ data, removeItem, editItem }) => {
  const keys = Object.keys(data.slice(0, 1)[0]);
  return (
    <>
      <Flex p="1rem" onClick={() => editItem()}>
        <Button colorScheme="green">Crear Producto</Button>
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Users</TableCaption>
          <Thead>
            <Tr>
              {keys.map((key, index) => {
                return <Th>{key}</Th>;
              })}
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, { index }) => {
              return (
                <Tr key={index}>
                  {keys.map((key, index) => {
                    return (
                      <>
                        {key === "image" ? (
                          <Td>
                            <Link
                              href={`${process.env.REACT_APP_SERVER_BASE_URL}/products/image/${item.image}`}
                              isExternal
                            >
                              <Icon as={AiFillFileImage} w="40px" h="40px" />
                            </Link>
                          </Td>
                        ) : (
                          key === "description" ? <Td><Text w='500px'>{item[key]}</Text></Td>: <Td>{item[key]}</Td>
                        )}
                      </>
                    );
                  })}

                  <Td>
                    <Flex gap="1rem">
                      <Icon
                        as={AiOutlineEdit}
                        h="40px"
                        w="40px"
                        onClick={() => editItem(item._id)}
                      />
                      <Icon
                        as={BsFillTrashFill}
                        h="40px"
                        w="40px"
                        onClick={() => removeItem(item._id)}
                      />
                    </Flex>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default BackofficeTable;
