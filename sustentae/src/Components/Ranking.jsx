import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";

export default function Ranking(props) {
  return (
    <Flex mt={"13px"} ml={"7px"} bg={"#FFF"}>
      <Image
        w={"25px"}
        h={"25px"}
        borderRadius={"10px"}
        src={props.logoEmpresa}
      ></Image>
      <Text fontSize={"13px"} ml={"7px"}>
        {props.nomeEmpresa}
      </Text>
    </Flex>
  );
}
