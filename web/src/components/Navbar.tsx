import React from "react"
import { 
  Box, 
  Container, 
  Flex, 
  Heading,
  Link, 
  useColorModeValue 
} from "@chakra-ui/react"
import NextLink from "next/link"

import { DarkModeSwitch } from "./DarkModeSwitch"

const Navbar = ({}) => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      top={0}
      bg={useColorModeValue("#ffffff40", "#20202380")}
      style={{backdropFilter: "blur(10px)"}}
      zIndex={1}
    >
      <Container display="flex" p={2} maxW="contaier.md" wrap="wrap" align="space-between">
        <Flex align="center" mr={5}>
          <NextLink href="/">
            <Link>
              <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                food stuff
              </Heading>
            </Link>
          </NextLink>
        </Flex>
        <Box flex={1} align="right">
          <DarkModeSwitch />
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar;