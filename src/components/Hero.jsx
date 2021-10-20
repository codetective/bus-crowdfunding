import {
  Stack,
  Flex,
  Button,
  Box,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={"url('/bus.jpg')"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        h="100%"
        justify={"center"}
        align="flex-end"
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={0}>
          <Text
            color={"white"}
            align={["center", "right", "right"]}
            fontWeight={700}
            fontFamily="Quicksand, -apple-system"
            fontSize={useBreakpointValue({
              base: "3xl",
              sm: "5xl",
              md: "6xl",
              lg: "6xl",
            })}
          >
            Help us make{" "}
            <Box fontSize={["7xl", "8xl", "9xl"]} as="span" color="coral">
              #IMPACT
            </Box>
          </Text>
          <Text
            align={["center", "right", "right"]}
            color={"white"}
            fontWeight={"normal"}
            // lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "sm", md: "sm", lg: "md" })}
          >
            This is the official info-page for the crowfunding project for PANS
            Uniuyo. <br />
            This crowd funding project is targeted at UNIUYO Pharmacy Alumni
            with the aim of raising funds for the purpose of achieving our dream
            of owning a faculty bus within a few months.
          </Text>
        </Stack>
        <Box align="right" position="fixed" bottom="0" right="0" p="10">
          <Text
            textTransform="uppercase"
            color={"white"}
            fontWeight={300}
            fontSize={useBreakpointValue({ base: "md", md: "md", lg: "md" })}
          >
            <Box fontSize="12px" as="span">
              Brought to you by : <br />
            </Box>
            Savior Okon{" "}
            <Box as="span" color="coral" fontWeight="bold">
              {" "}
              #IMPACT
            </Box>
          </Text>
        </Box>
      </VStack>
    </Flex>
  );
}
