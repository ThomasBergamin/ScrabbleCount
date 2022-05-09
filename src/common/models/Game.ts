export interface IGame {
  _id: string;
  date: string; // DD-MM-YYYY
  time: string; // HH:MM
  location: string;
  player1: { id: string; score: string; scrabbles: string };
  player2: { id: string; score: string; scrabbles: string };
  winner?: { playerId: string; playerScore: string };
  type: 'Draw' | 'Victory';
}
