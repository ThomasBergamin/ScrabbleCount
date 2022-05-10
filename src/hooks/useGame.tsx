import dbService from '../services/dbService';
import { IGame } from '../common/models/Game';
import { useQuery } from 'react-query';

const useGame = (id: string) => {
  const queryKey = ['game'];

  const {
    isLoading,
    data: game,
    error,
    isError,
    isFetching,
  } = useQuery<IGame>(queryKey, () => dbService.getGame(id), {
    staleTime: 60_000,
  });

  return { game, isLoading, isFetching, isError, error };
};

export default useGame;
