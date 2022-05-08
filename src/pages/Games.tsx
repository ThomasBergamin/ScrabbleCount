import {
  Container,
  SlideFade,
  Flex,
  Heading,
  Spacer,
  TableContainer,
} from '@chakra-ui/react';
import moment from 'moment';
import 'moment/locale/fr';
import { useEffect, useState } from 'react';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar/Navbar';
import Table from '../components/Table/Table';
import useGames from '../hooks/useGames';
import usePlayers from '../hooks/usePlayers';

const Games = () => {
  const { games, loading } = useGames();
  const { players, loading: loadingPlayers } = usePlayers();

  moment.locale('fr');
  const date = moment().format('Do MMMM YYYY, hh:mm');

  const headers = ['Gagnant', 'Score', 'Date'];
  const [rows, setRows] = useState<string[][]>([]);

  useEffect(() => {
    if (games && !loading && !loadingPlayers && players) {
      const gamesRows: string[][] = [];
      games.forEach((game) => {
        let winnerName = '';
        if (game.winner) {
          const winner = players.find((player) => player._id === game.winner);
          if (winner) {
            winnerName = winner.firstName;
          }
        } else winnerName = 'Égalité';

        gamesRows.push([winnerName, game.player1.score, game.date]);
      });
      setRows(() => [...gamesRows]);
    }
  }, [games, loading, loadingPlayers, players]);

  return (
    <>
      <Navbar />
      <Container maxW="120ch" py="3">
        <SlideFade in offsetY="50px">
          <Flex alignItems="baseline">
            <Heading as="h2" textColor="gray.50" size="xl">
              Toutes les parties
            </Heading>
            <Spacer></Spacer>
            <Heading as="h3" textColor="gray.50" size="l">
              {`Au ${date}`}
            </Heading>
          </Flex>

          <TableContainer
            my="6"
            backgroundColor="gray.600"
            borderRadius="lg"
            boxShadow="0 2px 0 hsla(0, 0%, 100%, .1), inset 0 3px 5px hsla(0, 0%, 0%, 0.5)"
          >
            <Table headers={headers} rows={rows} />
          </TableContainer>
        </SlideFade>
      </Container>
      <Footer />
    </>
  );
};

export default Games;
