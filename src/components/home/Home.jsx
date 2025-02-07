import { Box, Container } from "@chakra-ui/react";
import DisplayContent from "./DisplayContent";

const Home = () => {
  return (
    <Box width="100%" height="100vh">
      <Container height="100vh" maxW="4xl">
        <DisplayContent />
      </Container>
    </Box>
  );
};

export default Home;
