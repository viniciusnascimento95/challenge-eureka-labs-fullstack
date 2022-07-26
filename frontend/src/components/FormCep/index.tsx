import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Field, Form, Formik } from "formik";
import { api } from "../../services/api";
import * as yup from "yup";

export function FormCep() {
  const toast = useToast();

  const validationSchema = yup.object({
    cep: yup
      .string()
      .matches(/^[0-9]+$/, "Apenas números")
      .min(8, "Deve conter 8 digitos")
      .max(8, "Deve conter apenas 8 digitos")
      .required("Informe um cep valido"),
  });

  return (
    <Formik
      validationSchema={validationSchema}
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
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            }
          })
          .catch(function (error) {
            console.log(error);
            toast({
              title: "Cep invalido.",
              description: "Infelizmente o cep informado é invalido :(",
              status: "warning",
              duration: 9000,
              isClosable: true,
            });
          });
      }}
    >
      {({ handleSubmit, errors, touched }) => (
        <Form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <Flex color="black" mb={12} border="1px" borderColor="teal.300">
              <Box p="5">
                <FormLabel htmlFor="text" data-cy="cepLabel">
                  CEP:
                </FormLabel>
                <Field
                  as={Input}
                  id="cep"
                  name="cep"
                  type="text"
                  variant="filled"
                />
                {errors.cep && touched.cep ? (
                  <Alert status="warning" mt={5}>
                    <AlertIcon />
                    {errors.cep}
                  </Alert>
                ) : null}
              </Box>
              <Box pt="5">
                <Button mt={8} colorScheme="teal" type="submit">
                  <SearchIcon />
                  &nbsp;Buscar endereço
                </Button>
              </Box>
            </Flex>
          </FormControl>
        </Form>
      )}
    </Formik>
  );
}
