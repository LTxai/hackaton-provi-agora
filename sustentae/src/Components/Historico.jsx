import { Badge, Flex, Grid, GridItem, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import { ImDroplet } from "react-icons/im";

export function Historico(props) {
  return (
    <Flex
      w={"22vw"}
      bg={"#97B932"}
      h={"fit-content"}
      justify={"space-evenly"}
      pt={"3px"}
      pb={"3px"}
      borderRadius="10px"
      mb="3.2px"
    >
      <Badge
        bg={"#FFF"}
        color={"#97B932"}
        borderRadius={"10px"}
        padding={"3.5px"}
        w={"35px"}
        textAlign={'center'}
      >
        {props.mesDeReferencia}
      </Badge>
      <Text color={"#FFF"}>
        <Icon color={"#FBB11C"} as={BsLightningChargeFill} fontSize={"18px"} />
        {props.consumoEnergiaMesReferencia}
      </Text>
      <Text color={"#FFF"}>
        <Icon color={"#3D4984"} as={ImDroplet} fontSize={"18px"} />
        {props.consumoAguaMesReferencia}
      </Text>
    </Flex>
  );
}
