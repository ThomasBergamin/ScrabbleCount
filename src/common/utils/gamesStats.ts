import { IGame } from '../models/Game';
import { IPlayer, IWinner } from '../models/Player';

type InitPlayers = (games: IGame[]) => string[];

const retrievePlayersList: InitPlayers = (games) => {
  const playersList: string[] = [];

  games.forEach((game) => {
    if (!playersList.includes(game.player1.id)) {
      playersList.push(game.player1.id);
    }
    if (!playersList.includes(game.player2.id)) {
      playersList.push(game.player2.id);
    }
  });

  return playersList;
};

type ICalc = (games: IGame[], players: IPlayer[]) => IWinner | undefined;

const calcBestPlayer: ICalc = (games, players) => {
  const playersList = retrievePlayersList(games);

  const playersScores: { id: string; wins: number }[] = [];

  playersList.forEach((player) => playersScores.push({ id: player, wins: 0 }));

  games.forEach((game) => {
    if (game.type === 'Victory') {
      const winner = playersScores.find(
        (player) => player.id === game.winner?.playerId,
      );
      if (winner) {
        winner.wins++;
      }
    }
  }); // increments wins for every player based on game infos

  playersScores.sort((a, b) => {
    if (a.wins > b.wins) return -1;
    if (a.wins < b.wins) return 1;
    return 0;
  }); // sort playersScores by number of wins

  const winnerInfos: IWinner | undefined = players.find(
    (player) => player._id === playersScores[0].id,
  );
  if (winnerInfos) {
    winnerInfos.wins = playersScores[0].wins;
    return winnerInfos;
  }

  // TODO : Think about equality between multiple players
};

export { calcBestPlayer };
