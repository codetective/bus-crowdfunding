import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { faPiggyBank, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Donate() {
  return (
    <Container maxW={"6xl"} py={"100px"}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Donate
          </Text>
          <Heading
            fontSize={["28px", "4xl"]}
            fontFamily="Quicksand, -apple-system"
          >
            Where to donate?
          </Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Below are the details of the financial institution where donations
            will be sent and accomodated.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Stack direction={"row"} align={"center"}>
              <Flex
                w={8}
                h={8}
                align={"center"}
                justify={"center"}
                rounded={"full"}
                color="white"
                bg={"coral"}
              >
                <FontAwesomeIcon icon={faPiggyBank}></FontAwesomeIcon>
              </Flex>
              <Text fontWeight={500} fontSize="20px">
                Bank Info Coming soon
              </Text>
            </Stack>
            <Stack direction={"row"} align={"center"}>
              <Flex
                w={8}
                h={8}
                align={"center"}
                justify={"center"}
                rounded={"full"}
                bg={"blue.500"}
                color="white"
              >
                <FontAwesomeIcon icon={faPiggyBank}></FontAwesomeIcon>
              </Flex>
              <Text fontWeight={500} fontSize="20px">
                Bank Info Coming soon
              </Text>
            </Stack>
            <Stack direction={"row"} align={"center"}>
              <Flex
                w={8}
                h={8}
                align={"center"}
                justify={"center"}
                rounded={"full"}
                color="white"
                bg={"green.500"}
              >
                <FontAwesomeIcon icon={faPiggyBank}></FontAwesomeIcon>
              </Flex>
              <Text fontWeight={500} fontSize="20px">
                Bank Info Coming soon
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Flex h="400px" w="full" bg="red" display={["none", "none", "flex"]}>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={"/donate.jpg"}
            objectFit={"cover"}
            w="full"
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
