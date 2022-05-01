import { Badge, Box, Flex, Grid, GridItem, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import { ImDroplet } from "react-icons/im";

export function Historico(props) {
  return (
    <Flex
      w={"22vw"}
      bg={"#97B932"}
      h={"fit-content"}
      // justify={"space-evenly"}
      align={"center"}
      pt={"2px"}
      pb={"2px"}
      borderRadius="10px"
      mb="3.2px"
    >
      <Badge
        bg={"#FFF"}
        color={"#97B932"}
        borderRadius={"10px"}
        padding={"3.5px"}
        w={"35px"}
        textAlign={"center"}
        justifySelf={"start"}
        ml={"2px"}
      >
        {props.mesDeReferencia}
      </Badge>
      <Flex ml={"15px"} align={"center"} w={'90px'}>
        <Icon color={"#FBB11C"} as={BsLightningChargeFill} fontSize={"18px"} />
        <Text color={"#FFF"}>{props.consumoEnergiaMesReferencia}</Text>
      </Flex>
      <Flex ml={"50px"} align={"center"}>
        <Icon color={"#3D4984"} as={ImDroplet} fontSize={"18px"} />
        <Text color={"#FFF"}>{props.consumoAguaMesReferencia}</Text>
      </Flex>
    </Flex>
  );
}
