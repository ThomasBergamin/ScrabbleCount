import {
  Heading,
  Spacer,
  Flex,
  Container,
  SlideFade,
  Box,
  Center,
} from '@chakra-ui/react';
import 'moment/locale/fr';
import { useParams } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer';
import Loader from '../components/Loader/Loader';
import { Navbar } from '../components/Navbar/Navbar/Navbar';
import useGame from '../hooks/useGame';

const GameDetails = () => {
  const { id } = useParams();
  const { game, isLoading, isFetching, isError } = useGame(id ? id : '');

  return (
    <>
      <Navbar />
      <Container maxW="120ch" py="3">
        <SlideFade in offsetY="50px">
          {!isLoading && isFetching && (
            <Center>
              <Loader />
            </Center>
          )}

          {isLoading ? (
            <Center>
              <Loader />
            </Center>
          ) : (
            game && (
              <Flex alignItems="baseline">
                <Heading as="h2" textColor="gray.50" size="xl">
                  Détails de la partie
                </Heading>
                <Spacer></Spacer>
                <Heading as="h3" textColor="gray.50" size="l">
                  {`Du ${game.date}`}
                </Heading>
              </Flex>
            )
          )}
        </SlideFade>
      </Container>
      <Footer />
    </>
  );
};

export default GameDetails;
