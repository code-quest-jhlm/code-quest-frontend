/* eslint-disable no-console */
import { useCallback, useState } from 'react';
import { NavigateFunction } from 'react-router-dom';

import { AxiosError } from 'axios';
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
  const [errorFields, setErrorFields] = useState([]);

  const login = useCallback(async (loginData: LoginData) => {
    setIsLoading(true);

    try {
      const response = await AdminService.adminLogin<LoginResponse, LoginData>(loginData);
      console.log(response);

      navigate('/home', {
        replace: true,
      });

      setIsLoading(false);
    } catch (error) {
      if (error instanceof AxiosError) {
        setErrorFields(error.response?.data?.message);
      }
    } finally {
      setIsLoading(false);
      setSessionInformation(null);
    }
  }, []);

  return { login, errorFields, isLoading, setErrorFields };
}

export default useAuthentication;
