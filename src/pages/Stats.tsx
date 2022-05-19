import {
  Heading,
  Spacer,
  Flex,
  Container,
  Box,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  SlideFade,
} from '@chakra-ui/react';
import moment from 'moment';
import 'moment/locale/fr';
import { useState, useEffect } from 'react';
import { calcBestPlayer } from '../common/utils/gamesStats';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar/Navbar';
import useGames from '../hooks/useGames';
import usePlayers from '../hooks/usePlayers';
import { IWinner } from '../common/models/Player';

const Stats = () => {
  moment.locale('fr');
  const date = moment().format('Do MMMM YYYY, HH:mm');
  const { games } = useGames();
  const { players } = usePlayers();
  const [winner, setWinner] = useState<IWinner>();

  useEffect(() => {
    if (games && players) {
      const winnerInfos = calcBestPlayer(games, players);
      setWinner(winnerInfos);
    }
  }, [games, players]);

  // TODO : add loader waiting for games && players && winner

  return (
    <>
      <Navbar />
      <Container maxW="120ch" py="3">
        <SlideFade in offsetY="50px">
          <Flex alignItems="baseline">
            <Heading as="h2" textColor="gray.50" size="xl">
              Statistiques
            </Heading>
            <Spacer></Spacer>
            <Heading as="h3" textColor="gray.50" size="l">
              {`Au ${date}`}
            </Heading>
          </Flex>

          <Box
            mt="4"
            width="100%"
            borderRadius="10"
            bgColor="teal.400"
            p="6"
            boxShadow=" 0 2px 0 hsla(179, 30%, 60%), inset  0 2px 6px hsla(0, 0%, 0%, 0.6)"
          >
            <StatGroup color="whiteAlpha.900" height="100%html">
              <Stat>
                <StatLabel>Meilleur Joueur</StatLabel>
                <StatNumber>{winner?.firstName}</StatNumber>
                <StatHelpText>{winner?.wins} parties gagnées</StatHelpText>
              </Stat>
              <Spacer></Spacer>
              <Stat borderLeft="solid 2px white" pl="4">
                <StatLabel>Meilleur Score</StatLabel>
                <StatNumber>535</StatNumber>
                <StatHelpText>Christophe, le 05 Mai 2022</StatHelpText>
              </Stat>
              {/* TODO : links to the game where the score was made */}
              <Spacer></Spacer>
              <Stat borderLeft="solid 2px white" pl="4">
                <StatLabel>Plus de Srabbles en une partie</StatLabel>
                <StatNumber>6</StatNumber>
                <StatHelpText>Cécile, le 05 Mai 2022</StatHelpText>
              </Stat>
            </StatGroup>
          </Box>
        </SlideFade>
      </Container>
      <Footer />
    </>
  );
};

export default Stats;
