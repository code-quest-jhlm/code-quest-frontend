import { jwtDecode } from 'jwt-decode';
import { useEffect } from 'react';
import { TOKEN_KEY } from '@/constants';

interface UseValidateSesionProps {
  setProfileInformation: Function;
}

const useValidateSesion = ({
  setProfileInformation,
}: UseValidateSesionProps) => {
  const token = sessionStorage.getItem(TOKEN_KEY) || '';

  useEffect(() => {
    if (token.length) {
      try {
        const data = jwtDecode(token);
        setProfileInformation(data);
      } catch (error) {
        setProfileInformation(null);
      }
    }
  }, [token]);
  return {
    hasSession: token.length,
  };
};

export default useValidateSesion;
