import {
  Container,
  SlideFade,
  Flex,
  Heading,
  Spacer,
  TableContainer,
  Center,
} from '@chakra-ui/react';
import moment from 'moment';
import 'moment/locale/fr';
import { useEffect, useState } from 'react';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar/Navbar';
import Table from '../components/Table/Table';
import useGames from '../hooks/useGames';
import usePlayers from '../hooks/usePlayers';
import { useNavigate } from 'react-router-dom';
import { IGame } from '../common/models/Game';
import Loader from '../components/Loader/Loader';

const Games = () => {
  const navigate = useNavigate();
  const { isLoading, games, isError, isFetching } = useGames();

  const { players, isLoading: loadingPlayers } = usePlayers();

  moment.locale('fr');
  const date = moment().format('Do MMMM YYYY, HH:mm');

  const headers = ['Gagnant', 'Score', 'Date'];
  const [rows, setRows] = useState<string[][]>([]);

  useEffect(() => {
    if (games && !isLoading && !loadingPlayers && players && !isError) {
      const gamesRows: string[][] = [];
      games.forEach((game: IGame) => {
        let winnerName = '';
        let winnerScore = '';
        if (game.winner) {
          const winner = players.find(
            (player) => player._id === game.winner?.playerId,
          );
          if (winner) {
            winnerName = winner.firstName;
            winnerScore = game.winner.playerScore;
          }
        } else {
          winnerName = 'Égalité';
          winnerScore = game.player1.score;
        }

        gamesRows.push([game._id, winnerName, winnerScore, game.date]);
      });
      setRows(() => [...gamesRows]);
    }
  }, [games, isLoading, loadingPlayers, players, isError]);

  const handleRowClick = (id: string) => {
    navigate(`/games/${id}`, { replace: true });
  };

  return (
    <>
      <Navbar />
      <Container maxW="120ch" py="3">
        <SlideFade in offsetY="50px">
          <Center>{!isLoading && isFetching && <Loader />}</Center>

          <Flex alignItems="baseline">
            <Heading as="h2" textColor="gray.50" size="xl">
              Toutes mes parties
            </Heading>
            <Spacer></Spacer>
            <Heading as="h3" textColor="gray.50" size="l">
              {`Au ${date}`}
            </Heading>
          </Flex>

          {isLoading ? (
            <Center>
              <Loader />
            </Center>
          ) : (
            <TableContainer
              my="6"
              backgroundColor="gray.600"
              borderRadius="lg"
              boxShadow="0 2px 0 hsla(0, 0%, 100%, .1), inset 0 3px 5px hsla(0, 0%, 0%, 0.5)"
            >
              <Table
                headers={headers}
                rows={rows}
                handleRowClick={handleRowClick}
              />
            </TableContainer>
          )}
        </SlideFade>
      </Container>
      <Footer />
    </>
  );
};

export default Games;
