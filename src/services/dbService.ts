import axiosApiInstance from './axiosInstance';

const API_URL = 'http://localhost:3001/api/';
const instance = axiosApiInstance;

// TODO : every time a call is made with token, if error => refresh token

class dbService {
  async getGames() {
    const result = await instance.get(API_URL + 'games');
    return result.data;
  }

  async getGame(id: string) {
    const result = await instance.get(API_URL + 'games/' + id);
    return result.data;
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

  getPlayers(token: { Authorization: string }) {
    return instance.get(API_URL + 'players', { headers: token });
  }
}

export default new dbService();
