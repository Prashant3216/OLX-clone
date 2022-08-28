import { Container, SimpleGrid, Text } from "@chakra-ui/react";
import {ChevronRightIcon,ChevronLeftIcon} from "@chakra-ui/icons"
import { Product } from "./Product";

export function ListSlider({ data ,handlePage,current}) {
  return (
    <Container
      maxW={1240}
      m="30px auto"
      fontFamily="textType"
      bgColor="primary"
      borderRadius="5px"
      pt="20px"
      pb="40px"
      position="relative"
    >
      <Text  mb="10px" fontSize="2xl">
        Based on your Last Search
      </Text>
      <SimpleGrid columns={[1, 2, 3, 4]} pl="15px">
        {data.map((item) => (
          <Product product={item} key={item.id} />
        ))}
      </SimpleGrid>
      {current!==1 && <ChevronLeftIcon onClick={()=>handlePage(-1)} w="20px" h="40px" bgColor="secondary" color="white" position="absolute" top="50%" left="0px"/>}
      <ChevronRightIcon onClick={()=>handlePage(1)} w="20px" h="40px" bgColor="secondary" color="white"position="absolute" top="50%" right="0"/>
    </Container>
    

  );
}
