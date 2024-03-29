import { useCallback, useState } from 'react';
import { NavigateFunction } from 'react-router-dom';

import { AxiosError } from 'axios';
import AdminService from '@/services/AdminService';
import { TOKEN_KEY } from '@/constants';

interface LoginData {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

interface UseAuthenticationParams {
  navigate: NavigateFunction;
}

function useAuthentication({ navigate }: UseAuthenticationParams) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorFields, setErrorFields] = useState([]);

  const login = useCallback(async (loginData: LoginData) => {
    setIsLoading(true);

    try {
      const response = await AdminService.adminLogin<LoginResponse, LoginData>(loginData);
      sessionStorage.setItem(TOKEN_KEY, response.token);

      setIsLoading(false);

      navigate('/home');
    } catch (error) {
      if (error instanceof AxiosError) {
        setErrorFields(error.response?.data?.message);
      } else {
        setErrorFields([]);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { login, errorFields, isLoading, setErrorFields };
}

export default useAuthentication;
