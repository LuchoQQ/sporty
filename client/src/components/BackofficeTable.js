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
} from "@chakra-ui/react";
import { AiFillFileImage, AiOutlineEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
const BackofficeTable = ({ data, removeItem }) => {
  const keys = Object.keys(data.slice(0, 1)[0]);
  return (
    <>
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
            {data.map((user, { index }) => {
              return (
                <Tr key={index}>
                  {keys.map((key, index) => {
                    return (
                      <>
                        {key === "image" ? (
                          <Td>
                            <Link
                              href={`${process.env.REACT_APP_SERVER_BASE_URL}/products/image/${user.image}`}
                              isExternal
                            >
                              <Icon as={AiFillFileImage} w="40px" h="40px" />
                            </Link>
                          </Td>
                        ) : (
                          <Td>{user[key]}</Td>
                        )}
                      </>
                    );
                  })}

                  <Td>
                    <Flex gap="1rem">
                      <Icon as={AiOutlineEdit} h="40px" w="40px" />
                      <Icon as={BsFillTrashFill} h="40px" w="40px" onClick={() => removeItem(user._id)}/>
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
