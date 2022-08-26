import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Input,
  Select,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import { shadow } from "../Theme/theme.config";
import Login from "./Login";
import { UseModal } from "./Modal";

export function SearchNavbar() {
  return (
    <Box border="1px solid" borderColor="primary" pb={1} boxShadow={shadow}>
      <Box bg="primary">
        <Container maxW={1500}>
          <HStack p="10px 80px" spacing={3}>
            <Link to={"/"}>
              <svg
                width="48px"
                height="48px"
                viewBox="0 0 1024 1024"
                data-aut-id="icon"
                fillRule="evenodd"
              >
                <path d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              </svg>
            </Link>
            <Input
              p="22px 10px"
              type="search"
              borderRadius={4}
              maxW={250}
              border="2px solid"
              borderColor="secondary"
              focusBorderColor="searchBorder"
              bg="searchTabBg"
              placeholder="Find by Loaction"
              fontFamily="textType"
            ></Input>
            <HStack spacing={0}>
              <Input
                type="search"
                focusBorderColor="searchBorder"
                bg="searchTabBg"
                placeholder="Find Cars, Mobile Phones and more..."
                p="22px 10px"
                minW={550}
                borderLeftRadius={4}
                borderRightRadius="none"
                border="2px solid"
                borderColor="secondary"
                fontFamily="textType"
              ></Input>
              <Box bg="secondary" p="12px" color="white" borderRightRadius={4}>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 1024 1024"
                  fillRule="evenodd"
                  fill="white"
                >
                  <path d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"></path>
                </svg>
              </Box>
            </HStack>

            <Select
              variant="unstyled"
              placeholder="Language"
              size="lg"
              maxW="120px"
              fontFamily="textType"
            >
              <option value="option1">English</option>
              <option value="option2">हिन्दी</option>
            </Select>
            <Box fontFamily="textType">
              <UseModal />
            </Box>
            <Flex
              border="4px solid black"
              display="flex"
              borderRadius="30%"
              align="center"
              p="5px 20px"
              gap="10px"
              fontFamily="textType"
            >
              <span>
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 1024 1024"
                  fillRule="evenodd"
                >
                  <path d="M414.898 123.739v291.218h-291.218l-97.014 97.014 97.014 97.131h291.218v291.16l97.073 97.071 97.073-97.071v-291.16h291.16l97.131-97.131-97.131-97.014h-291.16v-291.218l-97.073-97.073z"></path>
                </svg>
              </span>
              <span>SELL</span>
            </Flex>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
}
