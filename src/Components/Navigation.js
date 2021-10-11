// Component Imports
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
// Icons
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FiUser, FiShoppingBag, FiHeart } from "react-icons/fi";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoLogoXbox } from "react-icons/io";

const Links = [
  { title: "NEW" },
  { title: "SALE" },
  { title: "MEN" },
  { title: "WOMEN" },
];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded="md"
    fontSize="sm"
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    fontWeight="800"
    fontFamily="'Roboto Condensed', sans-serif"
    href="#"
  >
    {children}
  </Link>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Box
        bg={useColorModeValue("white", "gray.900")}
        px={4}
        borderBottom="1px solid #EBEBEB"
        padding={4}
      >
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems="center"
            divider={<StackDivider borderColor="gray.200" />}
            align="stretch"
          >
            <Box cursor="pointer" ml={4}>
              <HiMenuAlt2 fontSize="22px" />
            </Box>
            <Box cursor="pointer">
              <IoLogoXbox fontSize="25px" />
            </Box>
            <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
              {Links.map((link, index) => (
                <NavLink key={index}>{link.title}</NavLink>
              ))}
            </HStack>
            <Flex alignItems="center" justifyContent="center">
              <NavLink><FiHeart /></NavLink>
              <NavLink>{"SEARCH"}</NavLink>
            </Flex>
            
          </HStack>
          {/* Icons rightmost */}
          <Flex alignItems="center" mr="10">
            <Box mr={8} cursor="pointer">
              <FiShoppingBag fontSize="22px" />
            </Box>
            <Menu>
              <MenuButton as={Button} rounded="full" variant="link" minW={0}>
                <FiUser color="#000" fontSize="22px" />
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Orders</MenuItem>
                <MenuDivider />
                <MenuItem>Log Out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link, index) => (
                <NavLink key={index}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default Navbar;
