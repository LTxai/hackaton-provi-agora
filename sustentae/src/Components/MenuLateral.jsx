import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { AddIcon } from "@chakra-ui/icons";
import { goToDashboard, goToProfilePage } from "../Routes/Coordinator";
import { useNavigate } from "react-router-dom";

export function MenuLateral(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
    <Box bg={"#5B8A95"} h={"85vh"} w={"20vw"} borderRadius={"40px"}>
      <Flex justify={"center"} flexDirection={"column"} align={"center"}>
        <Image
          bg={"#F2F2F2"}
          borderRadius={"100%"}
          w={"8vw"}
          h={"8vw"}
          mt={"8vh"}
          mb={"1.5vh"}
          ml={"-22.5px"}
          src={props.logoEmpresa}
        />
        <Text color={"#F4F4F4"}>{props.nomeEmpresa}</Text>
        <Button
          borderRadius={"25px"}
          h={"24px"}
          w={"136px"}
          mb={"6px"}
          mt={"8vh"}
          ml={"-22.5px"}
          onClick={() => goToDashboard(navigate)}
        >
          {"Home"}
        </Button>
        <Button
          borderRadius={"25px"}
          h={"24px"}
          w={"136px"}
          ml={"-22.5px"}
          onClick={() => goToProfilePage(navigate)}
        >
          {"Perfil"}
        </Button>
        <Box
          w={"128px"}
          h={"172px"}
          mt={"6vh"}
          ml={"-22.5px"}
          bgGradient={
            "linear(150.9deg, rgba(131, 123, 123, 0.324) -3.17%, rgba(214, 207, 207, 0.072) 103.12%)"
          }
          border={"1.5px dashed #F4F4F4"}
          borderColor={"#F4F4F4"}
          borderRadius={"20px"}
          backdropFilter={"blur(4px)"}
        >
          <Text
            color={"#F4F4F4"}
            textAlign={"center"}
            mt={"10px"}
          >{`Inserir`}</Text>
          <Text color={"#F4F4F4"} textAlign={"center"}>{`dados mensais`}</Text>
          <Center>
            <Flex
              h={"60px"}
              w={"60px"}
              borderRadius={"100%"}
              bgColor={"#F4F4F4"}
              mt={"25px"}
              align={"center"}
              onClick={onOpen}
              justify={"center"}
              _hover={{ cursor: "pointer" }}
            >
              <AddIcon color={"#C4C4C4"} w={"26"} h={"26"} />
            </Flex>
          </Center>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Adicionar novos dados</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Consumo de energia elétrica</FormLabel>
                  <Input placeholder="Consumo de energia" />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Consumo de água encanada</FormLabel>
                  <Input placeholder="Consumo de água" />
                </FormControl>
                <FormControl>
                  <FormLabel>Mês de Referência</FormLabel>
                  <Select id="mesDeReferencia" placeholder="Mês de Referência">
                    <option>Janeiro</option>
                    <option>Fevereiro</option>
                    <option>Março</option>
                    <option>Abril</option>
                    <option>Maio</option>
                    <option>Junho</option>
                    <option>Julho</option>
                    <option>Agosto</option>
                    <option>Setembro</option>
                    <option>Outubro</option>
                    <option>Novembro</option>
                    <option>Dezembro</option>
                  </Select>
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <IconButton icon={<FaArrowRight />} mr={3} onClick={onClose}>
                  Enviar
                </IconButton>
                <Button onClick={onClose}>Cancelar</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Flex>
    </Box>
  );
}
