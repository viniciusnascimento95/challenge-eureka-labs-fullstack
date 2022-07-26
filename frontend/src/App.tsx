import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Container,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import { TableAndress } from "./components/ListAndress";
import { FormCep } from "./components/FormCep";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Logo h="10vmin" pointerEvents="none" />
          <Container maxW="5xl">
            <FormCep />
            <TableAndress />
          </Container>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
