import { useEffect, useState } from 'react';
import useGames from './useGames';
import { IGame } from '../common/models/Game';

const useGame = (id: string) => {
  const [game, setGame] = useState<IGame>();
  const { games, loading, errors } = useGames();

  useEffect(() => {
    if (games && !loading && !errors) {
      setGame(() => games.find((game) => game._id === id));
    }
  }, [games, loading, errors]);

  return { game, loading, errors };
};

export default useGame;
