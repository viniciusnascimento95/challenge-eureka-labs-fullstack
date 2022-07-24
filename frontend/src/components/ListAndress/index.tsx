import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export function TableAndress() {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Endereços fornecidos pelo viaCep</TableCaption>
        <Thead>
          <Tr>
            <Th>CEP</Th>
            <Th>Logradouro</Th>
            <Th>Bairro</Th>
            <Th>Cidade</Th>
            <Th>UF</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>76803-000</Td>
            <Td>Rua: teste</Td>
            <Td>Bairro teste</Td>
            <Td>Cidade teste</Td>
            <Td>UF teste</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
