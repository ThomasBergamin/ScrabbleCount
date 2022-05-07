import { Box, Heading, VStack, SlideFade, Container } from '@chakra-ui/react';
import AddGame from '../common/forms/AddGame';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar/Navbar';
import { useAuth } from '../contexts/Auth/useAuth';

const Home = () => {
  const auth = useAuth();
  return (
    <>
      <Navbar />
      <Container maxW="120ch" py="3" px={4}>
        <SlideFade in offsetY="50px">
          <Box as="section" minHeight="70vh">
            <VStack
              alignItems="center"
              gap={10}
              textAlign="center"
              // mt={[24, 48]}
              mx={4}
            >
              <Heading as="h1" textColor="gray.100" size="3xl">
                Bienvenue sur ScrabbleCount 👋
              </Heading>
              <Heading as="h2" textColor="gray.100" size="xl">
                {auth?.currentUser.userId
                  ? 'Ajoute ta partie ici ✏'
                  : 'Connecte toi pour ajouter tes parties !'}
              </Heading>
              <AddGame authenticated={!!auth?.currentUser.userId} />
            </VStack>
          </Box>
        </SlideFade>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
