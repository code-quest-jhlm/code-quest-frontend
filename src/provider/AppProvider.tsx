import { FC, ReactNode, createContext, useContext, useMemo, useState } from 'react';
import { ProfileInformation } from '@/interfaces/common.interface';

export interface AppContextProps {
  profileInformation: ProfileInformation;
  setProfileInformation: React.Dispatch<React.SetStateAction<ProfileInformation>>;
}

export const AppContext = createContext({} as AppContextProps);
export const useAppContext = () => useContext(AppContext);

export interface AppContextProviderProps {
  children: ReactNode;
}

const AppContextProvider: FC<AppContextProviderProps> = ({ children }) => {
  const [profileInformation, setProfileInformation] = useState({} as ProfileInformation);

  const values = useMemo(
    () => ({
      profileInformation,
      setProfileInformation,
    }),
    [profileInformation]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
