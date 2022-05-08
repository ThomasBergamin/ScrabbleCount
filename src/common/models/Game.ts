export interface IGame {
  _id: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  location: string;
  player1: { id: string; score: string; scrabbles: string };
  player2: { id: string; score: string; scrabbles: string };
  winner?: string;
  type: 'Draw' | 'Victory';
}
