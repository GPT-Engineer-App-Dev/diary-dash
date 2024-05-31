import { Container, Text, VStack, Heading, Box, Image, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        <Box boxSize="sm">
          <Image src="/images/blog-image.jpg" alt="Blog Image" borderRadius="md" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Dive into my thoughts, experiences, and stories. Explore various topics ranging from technology to personal growth.
        </Text>
        <Link href="/about" color="teal.500" fontSize="xl">Learn more about me</Link>
      </VStack>
    </Container>
  );
};

export default Index;