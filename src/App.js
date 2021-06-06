import { Box, Flex, Heading } from "@chakra-ui/react";

function App() {
  return (
    <Box minW="100vw" minH="100vh">
      <Flex
        width="100%"
        justifyContent="center"
        alignItems="center"
        minH="100vh"
      >
        <Heading as="h4" color="blue.400">React + electron + Chakra-ui + React table</Heading>
      </Flex>
    </Box>
  );
}

export default App;
