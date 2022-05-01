import { SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { BsGear } from "react-icons/bs";
import { FiPower } from "react-icons/fi";
import { HiOutlineBell } from "react-icons/hi";
import { goToConfigPage, goToHelpPage, goToLoginPage } from "../Routes/Coordinator";
import logo from "../img/logo_Sustentae.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <Flex align={"center"} w={"60vw"}>
      <Image w={"230px"} src={logo} mt={"2.5vh"} ml={"30px"} />
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={
            <SearchIcon color="gray.500" w={"38px"} h={"20px"} ml={"12px"} />
          }
        />
        <Input
          type="tel"
          placeholder="Busque por algo..."
          w={"30vw"}
          h={"40px"}
          color={"#000"}
          border={"2px solid #000"}
          borderRadius={"13px"}
        />
      </InputGroup>
      <ButtonGroup>
        <IconButton
          w={"40px"}
          h={"40px"}
          fontSize="20px"
          bg={"#C4C4C4"}
          borderRadius={"13px"}
          mr={"15px"}
          ml={"55px"}
          icon={<HiOutlineBell />}
        />
        <IconButton
          w={"40px"}
          h={"40px"}
          fontSize="20px"
          bg={"#F44434"}
          borderRadius={"13px"}
          color={"#fff"}
          mr={"15px"}
          onClick={() => goToLoginPage(navigate)}
          icon={<FiPower />}
        />
        <ButtonGroup>
          <IconButton
            w={"40px"}
            h={"40px"}
            fontSize="20px"
            bg={"#C4C4C4"}
            borderLeftRadius={"13px"}
            borderRightRadius={"0px"}
            mr={"-10px"}
            icon={<BsGear />}
            onClick={() => goToConfigPage(navigate)}
          />
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<AiOutlineDown />}
              w={"40px"}
              h={"40px"}
              fontSize="18px"
              bg={"#97B932"}
              position="relative"
              pl={"8px"}
              borderLeftRadius={"0px"}
              borderRightRadius={"13px"}
            />
            <MenuList>
              <MenuItem onClick={() => goToConfigPage(navigate)}>
                Configurações
              </MenuItem>
              <MenuItem onClick={() => goToHelpPage(navigate)}>Ajuda</MenuItem>
            </MenuList>
          </Menu>
        </ButtonGroup>
      </ButtonGroup>
    </Flex>
  );
}
