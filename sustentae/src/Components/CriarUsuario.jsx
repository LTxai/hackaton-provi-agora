import React from "react";
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
  InputGroup
} from "@chakra-ui/react";

export function CriarUsuario(props) {

  return (
    <Drawer
      isOpen={props.isOpen}
      placement="right"
      initialFocusRef={props.firstField}
      onClose={props.onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">Criar novo usuário</DrawerHeader>

        <DrawerBody>
          <Box>
            <FormLabel htmlFor="username">Nome</FormLabel>
            <Input
              ref={props.firstField}
              id="username"
              placeholder="Escolha um nome de usuário"
            />
          </Box>

          <Box>
            <FormLabel htmlFor="url">Senha</FormLabel>
            <InputGroup>
              <Input type="url" id="url" placeholder="Escolha uma senha" />
            </InputGroup>
            <FormLabel htmlFor="url">Confirmar senha</FormLabel>
            <InputGroup>
              <Input type="url" id="url" placeholder="Confirme sua senha" />
            </InputGroup>
            <FormLabel htmlFor="url">Qual seu melhor e-mail?</FormLabel>
            <InputGroup>
              <Input type="url" id="url" placeholder="Escreva seu e-mail" />
            </InputGroup>
          </Box>
        </DrawerBody>

        <DrawerFooter borderTopWidth="1px">
          <Button variant="outline" mr={3} onClick={props.onClose}>
            Cancelar
          </Button>
          <Button colorScheme="blue">Criar</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
