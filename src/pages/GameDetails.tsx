import {
  Heading,
  Spacer,
  Flex,
  Container,
  SlideFade,
  Box,
} from '@chakra-ui/react';
import moment from 'moment';
import 'moment/locale/fr';
import { useParams } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar/Navbar';
import useGame from '../hooks/useGame';

const GameDetails = () => {
  const { id } = useParams();
  const { game } = useGame(id ? id : '');

  return (
    <>
      <Navbar />
      <Container maxW="120ch" py="3">
        <SlideFade in offsetY="50px">
          {game ? (
            <Flex alignItems="baseline">
              <Heading as="h2" textColor="gray.50" size="xl">
                Détails de la partie
              </Heading>
              <Spacer></Spacer>
              <Heading as="h3" textColor="gray.50" size="l">
                {`Du ${game.date}`}
              </Heading>
            </Flex>
          ) : (
            <Box color="whiteAlpha.900">
              Erreur avec le chargement de la partie 😔
            </Box>
          )}
        </SlideFade>
      </Container>
      <Footer />
    </>
  );
};

export default GameDetails;
