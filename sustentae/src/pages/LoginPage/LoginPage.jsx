import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  InputGroup,
  Center,
  FormControl,
  IconButton,
  Divider,
  Text,
  Link,
  Image,
  useDisclosure,
  Flex,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { BiKey } from "react-icons/bi";
import { FiPower } from "react-icons/fi";
import useForm from "../../Hooks/useForm";
import logo from "../../img/logo_Sustentae.png";
import { goToDashboard } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: "",
  });

  return (
    <Center bg={"#BFB2B2"} w="100vw" h="100vh" m="0">
      <Box bg={"#5B8A95"} w="90vw" h="90vh" m={"2vh 2vw"} borderRadius="40px">
        <Flex
          direction={"column"}
          alignItems={"center"}
          justify={"space-between"}
          mb={"10px"}
        >
          <Image w={"371px"} src={logo} />
          <Text color={"#fff"} mt={"-50px"}>
            Sua empresa consome menos e o planeta vive mais.
          </Text>
        </Flex>
        <Center>
          <Box bg={"#FFF"} w="25vw" h={"55vh"} borderRadius={"30px"}>
            <FormControl>
              <Flex h={"fit-content"}>
                <Icon
                  as={FaRegUser}
                  h={"40px"}
                  w={"26px"}
                  pl={"6px"}
                  pr={"4px"}
                  alignSelf={"flex-end"}
                  marginLeft={"17px"}
                  bg={"#97B932"}
                  color={"#fff"}
                  borderTopLeftRadius={"10px"}
                  borderBottomLeftRadius={"10px"}
                />
                <Input
                  mt={"60px"}
                  h={"40px"}
                  w={"90%"}
                  bg={"#E3E3E3"}
                  mr={"17px"}
                  borderTopRightRadius={"10px"}
                  borderTopLeftRadius={"0px"}
                  borderBottomLeftRadius={"0px"}
                  borderBottomRightRadius={"10px"}
                  placeholder={"Usuário"}
                />
              </Flex>
              <InputGroup>
                <Icon
                  as={BiKey}
                  h={"40px"}
                  w={"26px"}
                  pl={"6px"}
                  pr={"4px"}
                  alignSelf={"flex-end"}
                  marginLeft={"17px"}
                  bg={"#97B932"}
                  color={"#fff"}
                  borderTopLeftRadius={"10px"}
                  borderBottomLeftRadius={"10px"}
                />
                <Input
                  mt={"15px"}
                  h={"40px"}
                  w={"90%"}
                  bg={"#E3E3E3"}
                  mr={"17px"}
                  borderTopRightRadius={"10px"}
                  borderTopLeftRadius={"0px"}
                  borderBottomLeftRadius={"0px"}
                  borderBottomRightRadius={"10px"}
                  type={"password"}
                  placeholder={"Senha"}
                ></Input>
              </InputGroup>
              <Center>
                <IconButton
                  icon={<FiPower />}
                  w={"25%"}
                  mt={"25px"}
                  color={"white"}
                  bg={"#97B932"}
                  fontSize={"25px"}
                  onClick={() => goToDashboard(navigate)}
                />
              </Center>
            </FormControl>
            <Center>
              <Divider
                w={"80%"}
                border={"5px"}
                color={"#E3E3E3"}
                borderColor={"#E3E3E3"}
                mt={"12px"}
              />
            </Center>
            <Center>
              <Text fontSize={"16px"}>
                {`Ainda não possui uma conta? `}
                <Link color={"#97B932"} opacity={"70%"} onClick={onOpen}>
                  Crie
                </Link>
                <Drawer
                  isOpen={isOpen}
                  placement="right"
                  initialFocusRef={firstField}
                  onClose={onClose}
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth="1px">
                      Criar novo usuário
                    </DrawerHeader>

                    <DrawerBody>
                      <Box>
                        <FormLabel htmlFor="username">Nome</FormLabel>
                        <Input
                          ref={firstField}
                          id="username"
                          placeholder="Escolha um nome de usuário"
                        />
                      </Box>

                      <Box>
                        <FormLabel htmlFor="url">Senha</FormLabel>
                        <InputGroup>
                          <Input
                            type="url"
                            id="url"
                            placeholder="Escolha uma senha"
                          />
                        </InputGroup>
                        <FormLabel htmlFor="url">Confirmar senha</FormLabel>
                        <InputGroup>
                          <Input
                            type="url"
                            id="url"
                            placeholder="Confirme sua senha"
                          />
                        </InputGroup>
                        <FormLabel htmlFor="url">
                          Qual seu melhor e-mail?
                        </FormLabel>
                        <InputGroup>
                          <Input
                            type="url"
                            id="url"
                            placeholder="Escreva seu e-mail"
                          />
                        </InputGroup>
                      </Box>
                    </DrawerBody>

                    <DrawerFooter borderTopWidth="1px">
                      <Button variant="outline" mr={3} onClick={onClose}>
                        Cancelar
                      </Button>
                      <Button colorScheme="blue">Criar</Button>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </Text>
            </Center>
            <Center>
              <Link fontSize={"16px"}>Recuperar senha</Link>
            </Center>
          </Box>
        </Center>
      </Box>
    </Center>
  );
}
