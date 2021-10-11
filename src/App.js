import "./App.css";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Img,
  Text,
  VStack,
} from "@chakra-ui/react";
import Navigation from "./Components/Navigation";
import { BsChevronRight } from "react-icons/bs";

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
        <Flex flexDir="column" m={"150px 100px"}>
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
                ml="20"
                mt="-6"
                cursor={"pointer"}
                _hover={{ boxShadow: "lg" }}
                _active={{ bg: "#B33E4A" }}
              >
                <Text
                  color="white"
                  fontWeight="bold"
                  fontFamily="'Roboto Condensed', sans-serif"
                >
                  ADD
                </Text>
              </Flex>
            </Flex>
          </Box>
          {/* For other images selection */}
          <Flex flexDir="column">
            <Box>
              <Text
                fontFamily={"'Roboto Condensed', sans-serif"}
                textTransform="uppercase"
                fontWeight="bold"
              >
                Select Size
              </Text>
              <HStack spacing={4} mt={4}>
                <CircularSize active>S</CircularSize>
                <CircularSize>M</CircularSize>
                <CircularSize>L</CircularSize>
                <Text
                  textTransform={"uppercase"}
                  fontFamily={"'Roboto Condensed', sans-serif"}
                  color="#BFC1AE"
                  fontWeight={"700"}
                >
                  Size Guide
                </Text>
              </HStack>
            </Box>

            <Flex mt={8} alignItems={"center"} justifyContent={"center"}>
              <HStack>
                <GalleryImg
                  url="https://i.postimg.cc/VNVqs52s/gallery-2.png"
                  alt="gallery 2"
                />
                <GalleryImg
                  url="https://i.postimg.cc/13M0TvHq/gallery-3.png"
                  alt="gallery 3"
                />
                <GalleryImg
                  url="https://i.postimg.cc/N0M8wRJP/gallery-4.png"
                  alt="galley 4"
                />
                <GalleryImg
                  url="https://i.postimg.cc/9QctJ6G2/gallery-1.png"
                  alt="gallery 1"
                />
              </HStack>
              <Box ml="4" cursor="pointer" >
                <BsChevronRight fontSize="26px" fontWeight="900" />
              </Box>
            </Flex>
          </Flex>
        </Flex>
        <Flex>
          <Box>
            <Box
              boxSize="650px"
              bg="#EEF4DC"
              rounded="full"
              right="-20"
              top="220"
              position="absolute"
              zIndex={-1}
            />
            <Box ml="-10">
              <Image
                src="https://i.postimg.cc/XYYrDhXy/og-model.png"
                alt="Model"
              />
            </Box>
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

const CircularSize = (props) => (
  <Flex
    boxSize="38px"
    rounded="full"
    alignItems={"center"}
    justifyContent={"center"}
    border={props.active ? "1px solid #1E1E1E" : "1px solid #e0e0e0"}
    fontWeight={props.active ? "700" : null}
    cursor={"pointer"}
    _hover={{ shadow: "md" }}
  >
    <Text fontSize="sm" color={props.active ? "#000" : "gray.600"}>
      {props.children}
    </Text>
  </Flex>
);

const GalleryImg = (props) => (
  <Box>
    <Img src={props.url} alt={props.alt} w="125px" cursor="pointer" _hover={{ objectFit: "contain" }} />
  </Box>
);

export default App;
