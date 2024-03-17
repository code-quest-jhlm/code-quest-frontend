import { FC, ReactNode, createContext, useContext, useMemo, useState } from 'react';

export interface AppContextProps {
  userInformation: null;
  setUserInformation: React.Dispatch<React.SetStateAction<null>>;
}

export const AppContext = createContext({} as AppContextProps);
export const useAppContext = useContext(AppContext);

export interface AppContextProviderProps {
  children: ReactNode;
}

const AppContextProvider: FC<AppContextProviderProps> = ({ children }) => {
  const [userInformation, setUserInformation] = useState(null);

  const values = useMemo(
    () => ({
      userInformation,
      setUserInformation,
    }),
    [userInformation]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
