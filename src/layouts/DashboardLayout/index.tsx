import { FC, ReactNode } from 'react';
import AppHeader from '@/components/AppHeader';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => (
  <>
    <AppHeader />
    {children}
  </>
);

export default DashboardLayout;
