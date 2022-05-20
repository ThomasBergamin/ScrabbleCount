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

type ICalcBestPlayer = (
  games: IGame[],
  players: IPlayer[],
) => IWinner | undefined;

const calcBestPlayer: ICalcBestPlayer = (games, players) => {
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
  });

  const winnerInfos: IWinner | undefined = players.find(
    (player) => player._id === playersScores[0].id,
  );

  if (winnerInfos) {
    winnerInfos.wins = playersScores[0].wins;
    return winnerInfos;
  }

  // TODO : Think about equality between multiple players
};

type ICalcHighestScore = (games: IGame[]) => IGame | undefined;

const calcHighScore: ICalcHighestScore = (games) => {
  let highScoreGame: IGame | undefined;

  games.forEach((game) => {
    if (!highScoreGame) {
      highScoreGame = game;
    } else if (
      game.type === 'Victory' &&
      game.winner &&
      highScoreGame?.winner &&
      game.winner?.playerScore > highScoreGame?.winner?.playerScore
    ) {
      highScoreGame = game;
    }
  });

  return highScoreGame;
};

type ICalcMostScrabbles = (
  games: IGame[],
) => { player: string; scrabbles: number; game: IGame | undefined } | undefined;

const calcMostScrabbles: ICalcMostScrabbles = (games) => {
  let mostScrabblesGame: IGame | undefined;
  let mostScrabbles = { player: '', scrabbles: 0 };

  games.forEach((game) => {
    if (parseInt(game.player1.scrabbles) > mostScrabbles.scrabbles) {
      mostScrabblesGame = game;
      mostScrabbles = {
        player: game.player1.id,
        scrabbles: parseInt(game.player1.scrabbles),
      };
    }
    if (parseInt(game.player2.scrabbles) > mostScrabbles.scrabbles) {
      mostScrabblesGame = game;
      mostScrabbles = {
        player: game.player2.id,
        scrabbles: parseInt(game.player2.scrabbles),
      };
    }
  });

  return { game: mostScrabblesGame, ...mostScrabbles };
};

export { calcBestPlayer, calcHighScore, calcMostScrabbles };
