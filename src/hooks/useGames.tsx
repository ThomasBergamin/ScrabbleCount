import dbService from '../services/dbService';
import { IGame } from '../common/models/Game';
import { useQuery } from 'react-query';

const useGames = () => {
  const queryKey = ['games'];

  const {
    isLoading,
    data: games,
    error,
    isError,
    isFetching,
  } = useQuery<IGame[]>(queryKey, dbService.getGames, { staleTime: 60_000 });

  return { games, isLoading, isFetching, isError, error };
};

export default useGames;
