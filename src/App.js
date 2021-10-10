import "./App.css";
import { Box, Flex, Heading, Image, Img, Text, VStack } from "@chakra-ui/react";
import Navigation from "./Components/Navigation";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Homepage />
    </div>
  );
};

const Homepage = () => {
  return (
    <Flex flexDir="column" w="100vw">
      <Flex dir="row">
        <Flex flexDir="column" m={"180px 100px"}>
          <VStack spacing={2} alignItems={"flex-start"} mb={5}>
            <Head>TIED GREEN</Head>
            <Head>V-NECK SHIRT</Head>
          </VStack>
          <Box>
            <Text fontSize="5xl" mb="4">
              $67
            </Text>
            <Flex>
              <VStack alignItems={"start"} spacing="2">
                <Text>V-neck shirt with collar, Long sleeves with cuffs.</Text>
                <Text>Front tie at hem. Front button closure.</Text>
              </VStack>
              <Flex
                boxSize="100px"
                bg="#CD3E4A"
                alignItems={"center"}
                justifyContent={"center"}
                rounded={"full"}
                ml="10"
                mt="-4"
              >
                <Text color="white" fontWeight={"bold"}>
                  ADD
                </Text>
              </Flex>
            </Flex>
          </Box>
          <Box></Box>
        </Flex>
        <Flex>
          <Box>
            <Box
              boxSize="600px"
              bg="red.200"
              rounded="full"
              right="-10"
              top="220"
              position="absolute"
              zIndex={-1}
            ></Box>
            <Image
              src="https://i.postimg.cc/XYYrDhXy/og-model.png"
              alt="Model"
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

const Head = ({ children }) => (
  <Heading
    as="h1"
    fontFamily="'Roboto Condensed', sans-serif"
    fontWeight="700"
    letterSpacing={-2}
    size="3xl"
  >
    {children}
  </Heading>
);

export default App;
