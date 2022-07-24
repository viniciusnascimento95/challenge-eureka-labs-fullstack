import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

export function InputCep() {
  const [input, setInput] = useState("");

  const handleInputChange = (e: any) => setInput(e.target.value);

  const isError = input === "";

  return (
    <FormControl isInvalid={isError}>
      <FormLabel>CEP:</FormLabel>
      <Input type="text" value={input} onChange={handleInputChange} />
      {!isError ? (
        <FormHelperText>Informe o CEP para realizar a consulta.</FormHelperText>
      ) : (
        <FormErrorMessage>CEP é obrigatório.</FormErrorMessage>
      )}
      <Button colorScheme="teal" size="sm">
        Buscar endereço
      </Button>
    </FormControl>
  );
}
