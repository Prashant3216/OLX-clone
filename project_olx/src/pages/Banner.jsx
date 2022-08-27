import { Box, Button, Flex } from "@chakra-ui/react";

export function Banner({hording}) {
  return (
    <Flex
      h="135px"
      bgImage={hording}
      bgPosition="50% center"
      bgRepeat="no-repeat"
      bgSize="cover"
      justify="center"
      align="center"
    ></Flex>
  );
}
