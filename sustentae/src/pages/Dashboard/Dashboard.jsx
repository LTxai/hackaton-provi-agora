import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { DicasImpares, DicasPares } from "../../Components/CardDicas";
import { MenuLateral } from "../../Components/MenuLateral";
import { Historico } from "../../Components/Historico";
import { GraficoDesempenho } from "../../Components/GraficoDesempenho";
import Ranking from "../../Components/Ranking";
import amazonLogo from "../../img/Amazon_icon.png";
import Header from "../../Components/Header";
import { CardBoasVindas } from "../../Components/CardBoasVindas";
import vivoLogo from "../../img/vivo.png";
import americanasLogo from "../../img/americanaslogo.png";
import bradescoLogo from "../../img/bradesco.png";
import claroLogo from "../../img/claro.png";
import dellLogo from "../../img/delllogo.png";
import itauLogo from "../../img/itau.png";
import microsoftLogo from "../../img/microsoft.png";
import peugeotLogo from "../../img/peugeot.png";
import vwLogo from "../../img/volkswagen.png";
import magaLogo from "../../img/magalogo.png";

export default function Dashboard() {
  const [isLargerThan1200] = useMediaQuery(["(min-width: 1200px)"]);

  return (
    <Center bg={"#BFB2B2"} w="100vw" h="100vh" m="0">
      {isLargerThan1200 ? (
        <Flex>
          <MenuLateral nomeEmpresa={"Amazon"} logoEmpresa={amazonLogo} />
          <Grid
            bg={"#F2F2F2"}
            h={"85vh"}
            w={"70vw"}
            borderRadius={"40px"}
            ml={"-45px"}
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(5, 1fr)"
          >
            <GridItem colSpan={4}>
              <Header />
            </GridItem>
            <GridItem colSpan={1} rowSpan={3}>
              <Flex
                w="10vw"
                h={"fit-content"}
                bg={"#97B932"}
                mt={"17vh"}
                ml={"30px"}
                mr={"50px"}
                borderTopRadius={"20px"}
                align={"center"}
                justify={"center"}
              >
                <Text textAlign={"center"}>Ranking</Text>
              </Flex>
              <Flex
                w={"10vw"}
                h={"58vh"}
                bg={"#FFF"}
                ml={"30px"}
                borderBottomRadius={"20px"}
                flexDir={"column"}
                overflowY={"auto"}
              >
                <Ranking logoEmpresa={vivoLogo} nomeEmpresa={"Vivo"} />
                <Ranking
                  nomeEmpresa={"Americanas"}
                  logoEmpresa={americanasLogo}
                />
                <Ranking nomeEmpresa={"Dell "} logoEmpresa={dellLogo} />
                <Ranking
                  nomeEmpresa={"Magazine Luiza"}
                  logoEmpresa={magaLogo}
                />
                <Ranking
                  nomeEmpresa={"Microsoft"}
                  logoEmpresa={microsoftLogo}
                />
                <Ranking nomeEmpresa={"Bradesco"} logoEmpresa={bradescoLogo} />
                <Ranking nomeEmpresa={"Itaú"} logoEmpresa={itauLogo} />
                <Ranking nomeEmpresa={"Peugeot"} logoEmpresa={peugeotLogo} />
                <Ranking nomeEmpresa={"Claro"} logoEmpresa={claroLogo} />
                <Ranking nomeEmpresa={"Volkswagen"} logoEmpresa={vwLogo} />
              </Flex>
            </GridItem>
            <Flex flexDirection={"column"}>
              <GridItem colSpan={4}>
                <CardBoasVindas
                  nomeEmpresa={"Amazon"}
                  mensagemEmpresa={
                    "Vimos aqui que sua reputação em consumo consicente se manteve positiva, parabéns!"
                  }
                />
              </GridItem>
              <Flex flexDir={"column"}>
                <Box
                  ml={"50px"}
                  mt={"13px"}
                  bg={"#97B932"}
                  w={"fit-content"}
                  zIndex={"1"}
                  borderTopRadius={"10px"}
                >
                  <Text ml={"5px"} mr={"8px"}>{`Dicas`}</Text>
                </Box>
                <Flex
                  w={"48.5vw"}
                  h={"30vh"}
                  bg={"#97B932"}
                  ml={"50px"}
                  borderRightRadius="20px"
                  borderBottomLeftRadius={"20px"}
                  align="center"
                  justify={"space-evenly"}
                >
                  <DicasImpares
                    title="Dica #1"
                    text={"Utilize lâmpadas LED, para economizar energia"}
                  />
                  <DicasPares
                    title="Dica #2"
                    text={"Pinte as paredes do escritório com cores claras"}
                  />
                  <DicasImpares
                    title="Dica #3"
                    text={"Certifique-se da inexistência de vazamentos de água"}
                  />
                  <DicasPares
                    title="Dica #4"
                    text={"Invista em ventilação natural"}
                  />
                </Flex>
              </Flex>
            </Flex>
            <GridItem colSpan={4}>
              <Flex>
                <GraficoDesempenho
                  mesReferencia="ABR"
                  consumoEnergiaMesAtual="500 kW"
                  porcentagemEconomiaEnergia="40%"
                  consumoAguaMesAtual="368 m³"
                  porcentagemEconomiaAgua="38%"
                />
                <Box
                  ml={"20px"}
                  mt={"20px"}
                  bg={"#FFF"}
                  w={"23.5vw"}
                  h={"20vh"}
                  padding={"1%"}
                  borderRadius={"20px"}
                >
                  <Flex justify={"space-between"}>
                    <Heading as={"h5"} size={"sm"} mb={"3.2px"}>
                      Histórico de consumo
                    </Heading>
                  </Flex>
                  <Historico
                    mesDeReferencia={"MAR"}
                    consumoEnergiaMesReferencia={"700Kw"}
                    consumoAguaMesReferencia={"500m³"}
                  />
                  <Historico
                    mesDeReferencia={"FEV"}
                    consumoEnergiaMesReferencia={"980kW"}
                    consumoAguaMesReferencia={"700m³"}
                  />
                  <Historico
                    mesDeReferencia={"JAN"}
                    consumoEnergiaMesReferencia={"1200Kw"}
                    consumoAguaMesReferencia={"850m³"}
                  />
                </Box>
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
      ) : (
        <Box w={"85vw"} h={"90vh"} bg={"#97B932"} borderRadius={"20px"}>
          <Heading m={"20px"} textAlign={"center"} color={"#F4F4F4"}>
            Ops... Ainda estamos trabalhando na versão mobile
          </Heading>
          <Text textAlign={"center"}>Visite nosso site pelo computador</Text>
        </Box>
      )}
    </Center>
  );
}
