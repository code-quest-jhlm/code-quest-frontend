import { FC, ReactNode } from 'react';
import { Container } from '@mantine/core';
import { Navigate } from 'react-router-dom';

import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';

import { useAppContext } from '@/provider/AppProvider';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const { sessionInformation } = useAppContext();

  if (!sessionInformation) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <AppHeader />
      <Container size="lg">
        {children}
      </Container>
      <AppFooter />
    </>
  );
};

export default DashboardLayout;
