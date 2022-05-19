export interface IPlayer {
  _id: string;
  lastName: string;
  firstName: string;
}

export interface IWinner extends IPlayer {
  wins?: number;
}
