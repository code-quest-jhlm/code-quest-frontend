import { FC, ReactNode } from 'react';
import { Container } from '@mantine/core';

import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => (
  <>
    <AppHeader />
    <Container size="lg">
      {children}
    </Container>
    <AppFooter />
  </>
);

export default DashboardLayout;
