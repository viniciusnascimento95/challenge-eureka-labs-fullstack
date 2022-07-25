import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { api } from "../../services/api";

export function FormCep() {
  const toast = useToast();

  return (
    <Formik
      initialValues={{ cep: "" }}
      onSubmit={async (values, actions) => {
        await api
          .post("/andress", values)
          .then((response) => {
            if (response.status === 201) {
              toast({
                title: "Endereço adicionado.",
                description: "Cep informado foi adicionado.",
                status: "success",
                duration: 9000,
                isClosable: true,
              });
            }
          })
          .catch(function (error) {
            toast({
              title: "Falha na comunicação.",
              description: "Infelizmente aconteceu algum erro :(",
              status: "warning",
              duration: 9000,
              isClosable: true,
            });
          });
      }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel htmlFor="text">CEP:</FormLabel>
            <Flex color="black">
              <Field
                htmlSize={4}
                as={Input}
                id="cep"
                name="cep"
                type="text"
                variant="filled"
              />
            </Flex>
            <Stack spacing={1}>
              <Button mt={4} mb={12} colorScheme="teal" type="submit">
                Buscar endereço
              </Button>
            </Stack>
          </FormControl>
        </Form>
      )}
    </Formik>
  );
}
