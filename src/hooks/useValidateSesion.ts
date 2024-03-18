import { jwtDecode } from 'jwt-decode';
import { useEffect } from 'react';
import { TOKEN_KEY } from '@/constants';

interface UseValidateSesionProps {
  setToken: Function
  setProfileInformation: Function;
}

const useValidateSesion = ({
  setToken,
  setProfileInformation,
}: UseValidateSesionProps) => {
  const token = sessionStorage.getItem(TOKEN_KEY) || '';

  useEffect(() => {
    if (token.length) {
      try {
        const data = jwtDecode(token);
        setProfileInformation(data);
        setToken(token);
      } catch (error) {
        setToken('');
        setProfileInformation(null);
      }
    }
  }, [token]);
  return {
    hasSession: token.length,
  };
};

export default useValidateSesion;
