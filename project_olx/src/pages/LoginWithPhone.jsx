import {
  Button,
  Container,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Show,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon, EmailIcon } from "@chakra-ui/icons";
import { loginShadow, shadow } from "../Theme/theme.config";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export function LoginWithPhone() {
  const [show, setShow] = useState(false);
  let handlePasswordShow = () => {
    setShow(!show);
  };
  return (
    <>
      <Container
        w={450}
        m="200px auto"
        p={30}
        borderRadius={5}
        boxShadow={loginShadow}
        bg="#f3f0fa"
        fontFamily="texttype"
      >
        <Stack>
          <Text align={"center"}>Enter your phone no. to login </Text>
          <InputGroup>
            <InputLeftAddon
              children={<PhoneIcon color="secondary" />}
              bg="primary"
            />
            <Input
              type="number"
              placeholder="Enter Number"
              focusBorderColor="searchBorder"
              bg="white"
            />
          </InputGroup>
          <InputGroup>
            <InputRightElement w="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                bg="transparent"
                onClick={handlePasswordShow}
              >
                {show ? "HIDE" : "SHOW"}
              </Button>
            </InputRightElement>
            <Input
              type={show ? "text" : "password"}
              placeholder="Enter password"
              focusBorderColor="searchBorder"
              bg="white"
            />
          </InputGroup>

          <Button
            bg="secondary"
            color="white"
            _hover={{ bg: "searchBorder", color: "black" }}
          >
            SignIn
          </Button>
          <Text>
            No Account?{" "}
            <NavLink
              to="/signup"
              style={({isActive}) => ({
                color: isActive ? "blue" : "purple",
              })}
            >
              Create Account
            </NavLink>
          </Text>
        </Stack>
      </Container>
    </>
  );
}
