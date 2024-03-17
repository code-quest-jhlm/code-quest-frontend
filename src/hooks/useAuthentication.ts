/* eslint-disable no-console */
import { useCallback, useState } from 'react';
import { NavigateFunction } from 'react-router-dom';

import AdminService from '@/services/AdminService';

interface LoginData {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

interface UseAuthenticationParams {
  setSessionInformation: Function;
  navigate: NavigateFunction;
}

function useAuthentication({ setSessionInformation, navigate }: UseAuthenticationParams) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState(false);

  const login = useCallback(async (loginData: LoginData) => {
    setIsLoading(true);

    try {
      const response = await AdminService.adminLogin<LoginResponse, LoginData>(loginData);
      console.log(response);

      navigate('/home');
      setIsLoading(false);
    } catch (err) {
      setIsError(true);
      setSessionInformation(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { login, isError, isLoading };
}

export default useAuthentication;
