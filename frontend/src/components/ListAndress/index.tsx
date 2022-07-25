import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  TableContainer,
  Td,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface CepData {
  id: string;
  cep: string;
  street: string;
  district: string;
  city: string;
  uf: string;
  created_at: Date;
}

export function TableAndress() {
  const [ceps, setCep] = useState<CepData[]>();

  useEffect(() => {
    api
      .get("/andress")
      .then((response) => setCep(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

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
          {ceps &&
            ceps.map((cep) => (
              <Tr key={cep.id}>
                <Td>{cep.cep}</Td>
                <Td>{cep.street}</Td>
                <Td>{cep.district}</Td>
                <Td>{cep.city}</Td>
                <Td>{cep.uf}</Td>
              </Tr>
            ))}
          {/* <Td>{JSON.stringify(ceps[0])}</Td> */}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
