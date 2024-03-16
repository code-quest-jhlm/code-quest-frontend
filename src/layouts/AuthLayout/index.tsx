import { Container } from '@mantine/core';
import { FC, ReactNode } from 'react';

import './AuthLayout.scss';
import CloudLogo from '@/components/CloudLogo';

interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout: FC<AuthLayoutProps> = ({
  children,
}) => (
    <Container className="cq-auth-bg">
      <CloudLogo className="cq-auth-bg__cloud-top" fill="var(--mantine-primary-color-9)" />
      {children}
      <CloudLogo className="cq-auth-bg__cloud-bottom" fill="var(--mantine-primary-color-9)" />
    </Container>
  );

export default AuthLayout;
