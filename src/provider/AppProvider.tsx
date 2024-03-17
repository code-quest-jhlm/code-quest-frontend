import { FC, ReactNode, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

import { JwtTokenPayload, SessionInformation } from '@/interfaces/common.interface';
import { TOKEN_KEY } from '@/constants';

export interface AppContextProps {
  sessionInformation: SessionInformation;
  setSessionInformation: React.Dispatch<React.SetStateAction<SessionInformation>>;
}

export const AppContext = createContext({} as AppContextProps);
export const useAppContext = () => useContext(AppContext);

export interface AppContextProviderProps {
  children: ReactNode;
}

const AppContextProvider: FC<AppContextProviderProps> = ({ children }) => {
  const [sessionInformation, setSessionInformation] = useState<SessionInformation>(null);

  useEffect(() => {
    const token = sessionStorage.getItem(TOKEN_KEY) || '';
    if (token) {
      try {
        const decoded = jwtDecode<JwtTokenPayload>(token);
        setSessionInformation((prevState) => ({
          ...prevState,
          ...decoded,
        }));
      } catch (error) {
        setSessionInformation(null);
      }
    }
  }, []);

  const values = useMemo(
    () => ({
      sessionInformation,
      setSessionInformation,
    }),
    [sessionInformation]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
