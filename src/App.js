import { useState, useEffect } from "react";
import "./App.css";
import gsap from "gsap";
import AOS from "aos";
import 'aos/dist/aos.css';

// Components
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
// Icons
import { BsChevronRight } from "react-icons/bs";

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
  <Box onClick={props.onClick} data-aos="fade-left">
    <Img
      src={props.url}
      alt={props.alt}
      w="125px"
      cursor="pointer"
      transition="transform 0.2s"
      _hover={{
        transform: "scale(1.2)",
        objectFit: "contain",
        shadow: "lg",
        borderRadius: "lg",
      }}
    />
  </Box>
);

const Homepage = () => {
  const [currentImg, setCurrentImg] = useState(".model-img-1");

  useEffect(() => {
    AOS.init();
    console.log("AOS initialized")
  }, []);

  const handleAddBtn = () => {
    console.log("Current Img: ", currentImg);
  };

  const handleModelTwo = () => {
    console.log("Clicked Second Image");
    gsap.to(currentImg, {
      duration: 1,
      x: 300,
      opacity: 0,
      display: "none",
      ease: "back",
    });

    setTimeout(() => {
      gsap.to(".model-img-2", { display: "block" });

      gsap.from(".model-img-2", {
        duration: 1,
        x: 300,
        opacity: 0,
        ease: "back",
        display: "block",
      });
    }, 1000);

    setCurrentImg(".model-img-2");
  };

  const handleModelThree = () => {
    console.log("Clicked Third Image");
    gsap.to(currentImg, {
      duration: 1,
      x: 300,
      opacity: 0,
      display: "none",
      ease: "back",
    });

    setTimeout(() => {
      gsap.to(".model-img-3", { display: "block" });

      gsap.from(".model-img-3", {
        duration: 1,
        x: 300,
        opacity: 0,
        ease: "back",
        display: "block",
      });
    }, 1000);

    setCurrentImg(".model-img-3");
  };

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
                onClick={handleAddBtn}
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
                  alt="gallery-2"
                  onClick={handleModelTwo}
                />
                <GalleryImg
                  url="https://i.postimg.cc/13M0TvHq/gallery-3.png"
                  alt="gallery-3"
                  onClick={handleModelThree}
                />
                <GalleryImg
                  url="https://i.postimg.cc/N0M8wRJP/gallery-4.png"
                  alt="galley-4"
                />
                <GalleryImg
                  url="https://i.postimg.cc/9QctJ6G2/gallery-1.png"
                  alt="gallery-1"
                />
              </HStack>
              <Box ml="4" cursor="pointer">
                <BsChevronRight fontSize="26px" fontWeight="900" />
              </Box>
            </Flex>
          </Flex>
        </Flex>

        <Flex>
          <Box
            boxSize="650px"
            bg="#EEF4DC"
            rounded="full"
            right="-20"
            top="220"
            position="absolute"
            zIndex={-1}
          />
          <HStack spacing={"-200px"}>
            <Box className="model-img-1" data-aos="fade-right">
              <Image
                src="https://i.postimg.cc/XYYrDhXy/og-model.png"
                alt="model-1"
              />
            </Box>
            <Box
              className="model-img-2"
              transform={"translate(200px, 0)"}
              display="none"
            >
              <Image
                src="https://i.postimg.cc/zfmSRGFz/Screenshot-2021-10-11-at-11-15-20-AM-removebg-preview.png"
                alt="model-2"
              />
            </Box>
            <Box
              className="model-img-3"
              transform={"translate(200px, 0)"}
              display="none"
            >
              <Image
                src="https://i.postimg.cc/VNj99PKj/Screenshot-2021-10-11-at-11-15-31-AM-removebg-preview.png"
                alt="model-2"
              />
            </Box>
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  );
};

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Homepage />
    </div>
  );
};

export default App;
