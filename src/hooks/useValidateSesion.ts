import { jwtDecode } from 'jwt-decode';
import { useEffect } from 'react';
import { TOKEN_KEY } from '@/constants';

interface UseValidateSesionProps {
  setToken: Function
}

const useValidateSesion = ({
  setToken,
}: UseValidateSesionProps) => {
  const token = sessionStorage.getItem(TOKEN_KEY) || '';

  useEffect(() => {
    if (token.length) {
      try {
        jwtDecode(token);
        setToken(token);
      } catch (error) {
        setToken('');
      }
    }
  }, [token]);
  return {
    hasSession: token.length,
  };
};

export default useValidateSesion;
