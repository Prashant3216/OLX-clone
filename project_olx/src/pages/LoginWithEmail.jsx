import {
  Button,
  Container,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  VStack,
} from "@chakra-ui/react";

export function LoginWithEmail() {
  return (
    <>
      <Container>
        <VStack>
          <InputGroup>
            <InputLeftAddon children="Email" colorScheme="red"/>
            <Input type="email" placeholder="Enter Email" />
          </InputGroup>

          <Button>Next</Button>
        </VStack>
      </Container>
    </>
  );
}
