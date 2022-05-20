import dbService from '../services/dbService';
import { IPlayer } from '../common/models/Player';
import { useQuery } from 'react-query';

const usePlayers = () => {
  const queryKey = ['games'];

  const {
    isLoading,
    data: players,
    error,
    isError,
    isFetching,
  } = useQuery<IPlayer[]>(queryKey, dbService.getPlayers, {
    staleTime: 60_000,
  });

  return { players, isLoading, isFetching, isError, error };
};

export default usePlayers;
