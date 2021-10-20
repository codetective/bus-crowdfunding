import { Box } from "@chakra-ui/react";
import NextHead from "next/head";
import Hero from "../Hero";

const Layout = ({ children }) => (
  <>
    <NextHead>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    </NextHead>
    <Hero />
    <Box as="main" maxW="1440px" mx="auto" pos="relative">
      <Box bg="gray.50" pos="relative" zIndex="2">
        {children}
      </Box>
    </Box>
  </>
);

export default Layout;
