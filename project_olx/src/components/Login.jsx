import { Button, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Login({ onClose }) {
  return (
    <VStack>
      <NavLink to="/login_with_phone">
        <Button
          onClick={onClose}
          bg="transparent"
          border="1px solid"
          w="350px"
          fontSize={20}
          fontFamily="textType"
          borderColor="secondary"
          _hover={{ border: "3px solid " }}
        >
          Continue with Phone
        </Button>
      </NavLink>

      <NavLink to="/login_with_email">
        <Button
          onClick={onClose}
          bg="transparent"
          border="1px solid"
          w="350px"
          fontSize={20}
          fontFamily="textType"
          borderColor="secondary"
          _hover={{ border: "3px solid " }}
        >
          Continue with Email
        </Button>
      </NavLink>
    </VStack>
  );
}
