import { Box, Center, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function PaginaNaoEncontrada() {
  return (
    <Center bg={"#BFB2B2"} w="100vw" h="100vh" m="0">
      <Box textAlign={'center'}>
        <Heading color={"#97B932"}>Erro 404!</Heading>
        <Text>A página não foi encontrada.</Text>
      </Box>
    </Center>
  );
}
