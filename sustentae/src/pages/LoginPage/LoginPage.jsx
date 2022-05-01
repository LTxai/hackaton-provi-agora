import {
  Box,
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
  useMediaQuery,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { BiKey } from "react-icons/bi";
import { FiPower } from "react-icons/fi";
import logo from "../../img/logo_Sustentae.png";
import { goToDashboard } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { CriarUsuario } from "../../Components/CriarUsuario";
// import useForm from "../../Hooks/useForm";

export default function LoginPage() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan1024] = useMediaQuery(["(min-width: 1024px)"]);
  const firstField = React.useRef();

  // const { form, onChange, cleanFields } = useForm({
  //   email: "",
  //   password: "",
  // });

  return (
    <Center bg={"#BFB2B2"} w="100vw" h="100vh" m="0">
      {isLargerThan1024 ? (
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
                <Text fontSize={"16px"} textAlign={'center'}>
                  {`Ainda não possui uma conta? `}
                  <Link color={"#97B932"} opacity={"70%"} onClick={onOpen}>
                    Crie
                  </Link>
                  <CriarUsuario 
                    firstField = {firstField}
                    isOpen = {isOpen}
                    onClose = {onClose}
                  />
                </Text>
              </Center>
              <Center>
                <Link fontSize={"16px"}>Recuperar senha</Link>
              </Center>
            </Box>
          </Center>
        </Box>
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
