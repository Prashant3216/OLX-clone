import {
  Box,
  Flex,
  HStack,
  Image,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";

export function Product({ product }) {
  return (
    <Box
      border="1px solid black"
      w="288px"
      p="9px"
      fontFamily="texttype"
      borderRadius="5px"
    >
        <Stack spacing="4px">
          <Flex w="270px" h="160px" justify={"center"}>
            <Image src={product.image} alt={product.title} h="100%"></Image>
          </Flex>
          <Flex direction="column" overflow="hidden" p="0 10px">
            <Text as="b" fontSize={20}>
              {"₹ " + product.price}
            </Text>
            {product.details && <Text as="b">{product.details}</Text>}

            <Flex color="grey">{product.title}</Flex>

            <Flex justify="space-between" fontSize="13px" color="grey">
              <Text>{product.location}</Text>
              <Text>{product.date}</Text>
            </Flex>
          </Flex>
        </Stack>
    </Box>
  );
}
