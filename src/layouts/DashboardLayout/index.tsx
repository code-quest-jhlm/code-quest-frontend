import { FC, ReactNode } from 'react';
import { Container } from '@mantine/core';

import AppHeader from '@/components/AppHeader';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => (
  <>
    <AppHeader />
    <Container size="lg">
      {children}
    </Container>
  </>
);

export default DashboardLayout;
