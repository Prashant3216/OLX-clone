import {Container, SimpleGrid, Text } from "@chakra-ui/react";
import { Product } from "./Product";

export function ListOfProduct({ data = [] }) {
  return (
    
    <Container  maxW={1300} m="30px auto">
    <Text mt="20" mb="20px" fontSize="2xl">Fresh Recommendations</Text>
    <SimpleGrid columns={[1,2,3,4]} spacingY='20px'>
      {data.map((item) => (
        <Product product={item} />
      ))}
    </SimpleGrid>
    </Container>
  );
}
