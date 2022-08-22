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
  Button,
} from "@chakra-ui/react";
const UsersTable = ({ data }) => {
  const keys = Object.keys(data.slice(0, 1)[0]);
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Users</TableCaption>
          <Thead>
            <Tr>
              {keys.map((key, index) => {
                console.log(key);
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
                    return <Td>{user[key]}</Td>;
                  })}

                  <Td>
                    <Button>Eliminar</Button>
                    <Button>Editar</Button>
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

export default UsersTable;
