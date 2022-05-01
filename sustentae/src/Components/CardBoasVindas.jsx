import React from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { BsExclamationLg } from "react-icons/bs";

export function CardBoasVindas(props) {
  return (
    <Flex h={"7vh"}>
      <Box
        bg={"#97B932"}
        w={"2.5vw"}
        borderLeftRadius={"9px"}
        align={"center"}
        justify={"center"}
        ml={"50px"}
      >
        <Icon
          as={BsExclamationLg}
          color={"#FFF"}
          fontSize={"25px"}
          mt={"10px"}
        />
      </Box>
      <Box
        bg={"#FFF"}
        w={"46vw"}
        borderRightRadius={"9px"}
        align={"center"}
        justify={"center"}
      >
        <Text
          fontSize={"16px"}
          textAlign={"left"}
          ml={"5px"}
        >{`Bem vinda de volta, ${props.nomeEmpresa}!`}</Text>
        <Text fontSize={"13px"} textAlign={"left"} ml={"5px"}>
          {props.mensagemEmpresa}
        </Text>
      </Box>
    </Flex>
  );
}
