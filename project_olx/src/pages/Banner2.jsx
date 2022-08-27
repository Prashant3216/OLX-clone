import { Box, Button, Center, Divider, Flex, Image, Text } from "@chakra-ui/react";

export function Banner2() {
  return (
    <Flex
      fontFamily="textType"
      h="198px"
      bgColor="primary"
      justify="center"
      align="center"
    >
      <Flex maxW="1300">
        <Flex>
          <Image src="https://statics.olx.in/external/base/img/phone-app.webp"></Image>
        </Flex>
        <Flex
          ml="44px"
          direction="column"
          w="400px"
          lineHeight="24px"
          align={"left"}
          justify="center"
        >
          <Text as="b" fontSize="3xl">
            TRY THE OLX APP
          </Text>
          <Text fontSize="xl" mt="20px">
            Buy, sell and find just about anything using the app on your mobile.
          </Text>
        </Flex>
        <Flex direction="column" justify="center"
      align="left">
            <Text mb="20px" as="b">GET YOUR APP TODAY</Text>
            <Flex>
            <Box>
                <a href="https://apps.apple.com/in/app/olx-buy-sell-near-you/id913492792?utm_source=desktop_ios&utm_medium=home_banner&utm_campaign=home"><Image src="https://statics.olx.in/external/base/img/appstore_2x.png"></Image></a>
            </Box>
            <Box>
                <a href="https://play.google.com/store/apps/details?id=com.olx.southasia&hl=en_IN&utm_source=desktop_android&utm_medium=home_banner&utm_campaign=home"><Image src="https://statics.olx.in/external/base/img/playstore_2x.png"></Image></a>
            </Box>
            </Flex>
            
        </Flex>
       
      </Flex>
    </Flex>
  );
}
