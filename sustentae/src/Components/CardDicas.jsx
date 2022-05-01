import React from "react";
import { Box, Text } from "@chakra-ui/react";

export function DicasImpares(props) {
  return (
    <Box w={"18%"} h={"80%"} borderRadius={"25px"} bg={"#5B8A95"}>
      <Text
        color={"#9DC132"}
        fontWeight={"bold"}
        textAlign={"center"}
        mt={"5px"}
      >
        {props.title}
      </Text>
      <Text color={"#FFF"} fontSize={"13px"} ml={"5px"} mr={"5px"}>
        {props.text}
      </Text>
    </Box>
  );
}

export function DicasPares(props) {
  return (
    <Box w={"18%"} h={"80%"} borderRadius={"25px"} bg={"#646F9F"}>
      <Text
        color={"#9DC132"}
        fontWeight={"bold"}
        textAlign={"center"}
        mt={"5px"}
      >
        {props.title}
      </Text>
      <Text color={"#FFF"} fontSize={"13px"} ml={"5px"} mr={'5px'}>
        {props.text}
      </Text>
    </Box>
  );
}
