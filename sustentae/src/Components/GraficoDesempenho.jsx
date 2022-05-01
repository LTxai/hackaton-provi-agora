import { Badge, Box, Center, Divider, Flex, Heading, Icon, Stat, StatArrow, StatGroup, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";
import React from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import { ImDroplet } from "react-icons/im";

export function GraficoDesempenho(props) {
  return (
    <Box
      ml={"50px"}
      mt={"20px"}
      mb={'25px'}
      bg={"#FFF"}
      w={"23.5vw"}
      h={"20vh"}
      padding={"1%"}
      borderRadius={"20px"}
    >
      <Flex justify={"space-between"}>
        <Heading as={"h5"} size={"sm"}>
          Gráfico de desempenho
        </Heading>
        <Badge
          ml="1"
          background={"#97B932"}
          color={"#FFF"}
          borderRadius={"10px"}
          padding={"3.5px"}
          alignSelf={"end"}
        >
          {props.mesReferencia}
        </Badge>
      </Flex>
      <StatGroup mt={"15px"}>
        <Stat>
          <StatLabel textAlign={"center"} mb="5px">
            Energia Elétrica
          </StatLabel>
          
          <Flex align={"center"} justify="center">
            <StatNumber
              bg={"#97B932"}
              color={"#FFF"}
              fontSize={"20px"}
              w={"80%"}
              borderRadius={"10px"}
              textAlign={"center"}
              pt={'-2px'}
            >
              <Icon
                color={"#FBB11C"}
                as={BsLightningChargeFill}
                fontSize={"18px"}
                pt={'2px'}
              />
              {props.consumoEnergiaMesAtual}
            </StatNumber>
          </Flex>
          <Center>
            <StatHelpText textAlign={'center'}>
              <StatArrow
                type="increase"
                alignSelf={"center"}
                textAlign={"center"}
              />
              {`${props.porcentagemEconomiaEnergia} de economia`}
            </StatHelpText>
          </Center>
        </Stat>
        <Center height="50px">
          <Divider
            mt={"20px"}
            h={"80px"}
            orientation="vertical"
            border={"2.5px"}
            ml="7px"
            mr="7px"
            borderColor="#97B932"
            bg={"#97b932"}
          />
        </Center>
        <Stat>
          <StatLabel textAlign={"center"} mb="5px">
            Água encanada
          </StatLabel>
          <Flex align={"center"} justify="center">
            <StatNumber
              bg={"#97B932"}
              color={"#FFF"}
              fontSize={"20px"}
              w={"80%"}
              borderRadius={"10px"}
              textAlign={"center"}
              pb={'-2px'}
            >
              <Icon as={ImDroplet} color={"#3D4984"} fontSize={"18px"} pt={'2.5px'}/>
              {props.consumoAguaMesAtual}
            </StatNumber>
          </Flex>

          <StatHelpText textAlign={'center'}>
            <StatArrow type="increase" />
            {`${props.porcentagemEconomiaAgua} de economia`}
          </StatHelpText>
        </Stat>
      </StatGroup>
    </Box>
  );
}
