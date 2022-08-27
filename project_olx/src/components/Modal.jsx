import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Login from "./Login";
// import { useState } from "react"

export function UseModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Login</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton />

          <ModalBody>
            <Login onClose={onClose}/>
          </ModalBody>

          <ModalFooter>
            <VStack>
              <p>All your personal details are safe with us.</p>
              <p>
                <span>If you continue, you are accepting</span>
                <span>OLX Terms and Conditions and Privacy Policy</span>
              </p>
            </VStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
