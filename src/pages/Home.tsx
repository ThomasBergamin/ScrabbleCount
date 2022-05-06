import {
  Box,
  Heading,
  VStack,
  SlideFade,
  Container,
  FormControl,
  HStack,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar/Navbar';

const Home = () => {
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
                Ajoute ta partie ici ✏
              </Heading>
              <Box
                bgColor="gray.600"
                p="8"
                borderRadius="10"
                w={['100%', '100%', '50%']}
                /* filter="blur(3px)"  */
              >
                <FormControl>
                  <FormLabel htmlFor="date">Date</FormLabel>
                  <Input id="date" type="date" />
                  <FormLabel mt="4" htmlFor="time">
                    Heure
                  </FormLabel>
                  <Input id="time" type="time" />
                  <FormLabel mt="4" htmlFor="location">
                    Lieu
                  </FormLabel>
                  <Input id="location" type="text" />

                  <HStack mt="4">
                    <VStack spacing="1" alignItems="baseline">
                      <FormLabel htmlFor="player1">Joueur 1</FormLabel>
                      <Input id="player1" type="text" placeholder="Joueur 1" />
                    </VStack>
                    <VStack spacing="1" alignItems="baseline">
                      <FormLabel htmlFor="score1">Score</FormLabel>
                      <Input id="score1" type="number" min="0" />
                    </VStack>
                    <VStack spacing="1" alignItems="baseline">
                      <FormLabel htmlFor="scrabbles1">Scrabbles</FormLabel>
                      <Input id="scrabbles1" type="number" min="0" />
                    </VStack>
                  </HStack>
                  <HStack mt="4">
                    <VStack spacing="1" alignItems="baseline">
                      <FormLabel htmlFor="player2">Joueur 2</FormLabel>
                      <Input id="player2" type="text" placeholder="Joueur 2" />
                    </VStack>
                    <VStack spacing="1" alignItems="baseline">
                      <FormLabel htmlFor="score2">Score</FormLabel>
                      <Input id="score2" type="number" min="0" />
                    </VStack>
                    <VStack spacing="1" alignItems="baseline">
                      <FormLabel htmlFor="scrabbles2">Scrabbles</FormLabel>
                      <Input id="scrabbles2" type="number" min="0" />
                    </VStack>
                  </HStack>
                </FormControl>
                <Button mt={6} colorScheme="teal" type="submit" w="100%">
                  Submit
                </Button>
              </Box>
            </VStack>
          </Box>
        </SlideFade>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
