import { FC, ReactNode } from 'react';
import { Container } from '@mantine/core';
import { Navigate } from 'react-router-dom';

import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';

import { useAppContext } from '@/provider/AppProvider';
import useValidateSesion from '@/hooks/useValidateSesion';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const { setToken } = useAppContext();
  const { hasSession } = useValidateSesion({ setToken });

  if (!hasSession) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <AppHeader />
      <Container size="lg">{children}</Container>
      <AppFooter />
    </>
  );
};

export default DashboardLayout;
