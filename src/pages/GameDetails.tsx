import {
  Heading,
  Spacer,
  Flex,
  Container,
  SlideFade,
  Box,
  Center,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import 'moment/locale/fr';
import { useParams, useNavigate } from 'react-router-dom';
import AlertDialog from '../components/AlertDialog/AlertDialog';
import { Footer } from '../components/Footer/Footer';
import Loader from '../components/Loader/Loader';
import { Navbar } from '../components/Navbar/Navbar/Navbar';
import useGame from '../hooks/useGame';
import dbService from '../services/dbService';

const GameDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { game, isLoading, isFetching, isError } = useGame(id ? id : '');

  const handleDelete = () => {
    if (id)
      dbService.deleteGame(id).then(() => navigate('/', { replace: true }));
  };

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
              <Box>
                <Flex alignItems="baseline">
                  <Heading as="h2" textColor="gray.50" size="xl">
                    Détails de la partie
                  </Heading>
                  <Spacer></Spacer>
                  <Heading as="h3" textColor="gray.50" size="l">
                    {`Du ${game.date}`}
                  </Heading>
                </Flex>
                <Button onClick={onOpen} colorScheme="red">
                  Delete Game
                </Button>
              </Box>
            )
          )}
        </SlideFade>
      </Container>
      <AlertDialog
        isOpen={isOpen}
        onClose={onClose}
        onValidate={handleDelete}
        title={`Supprimer la partie du ${game && game.date} ?`}
        body={'Tu es sûr ? Tu ne pourras pas revenir en arrière'}
      />
      <Footer />
    </>
  );
};

export default GameDetails;
