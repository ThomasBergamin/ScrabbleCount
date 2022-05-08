import { useEffect, useState } from 'react';
import dbService from '../services/dbService';
import { useAuth } from '../contexts/Auth/useAuth';
import { IGame } from '../common/models/Game';

const useGames = () => {
  const auth = useAuth();
  const [games, setGames] = useState<IGame[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState();

  useEffect(() => {
    if (auth) {
      setLoading(true);
      dbService
        .getGames(auth.authHeader())
        .then((response) => setGames(response.data))
        .catch(setErrors)
        .finally(() => setLoading(false));
    }
  }, []);

  return { games, loading, errors };
};

export default useGames;
