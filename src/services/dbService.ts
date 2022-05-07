import axios from 'axios';

const API_URL = 'http://localhost:3001/api/';
const instance = axios.create({
  baseURL: API_URL,
});

class dbService {
  getGames(
    signal: AbortSignal,
    token: {
      Authorization: string;
    },
  ) {
    return instance.get(API_URL + 'games', { headers: token, signal });
  }
  postGames(
    data: {
      date: string;
      time: string;
      location: string;
      player1: string;
      player2: string;
      score1: string;
      score2: string;
      scrabbles2: string;
      scrabbles1: string;
    },

    token: {
      Authorization: string;
    },
  ) {
    return instance.post(API_URL + 'games', data, { headers: token });
  }
}

export default new dbService();
