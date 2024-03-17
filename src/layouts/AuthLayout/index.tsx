import { Container, rem } from '@mantine/core';
import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import CloudLogo from '@/components/CloudLogo';
import AppFooter from '@/components/AppFooter';
import AssetRender from '@/components/AssetRender';

import devtallesLightLogo from '@/assets/detalles_light_logo.png';

import { useAppContext } from '@/provider/AppProvider';
import useValidateSesion from '@/hooks/useValidateSesion';

import './AuthLayout.scss';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  const { setToken } = useAppContext();
  const { hasSession } = useValidateSesion({ setToken });

  if (hasSession) {
    return <Navigate to="/home" replace />;
  }

  return (
    <Container className="cq-auth-bg">
      <AssetRender
        boxConfig={{
          pos: 'absolute',
          top: rem(24),
          left: rem(12),
        }}
        imageConfig={{
          w: rem(184),
          src: devtallesLightLogo,
        }}
      />
      <CloudLogo className="cq-auth-bg__cloud-top" fill="var(--mantine-primary-color-9)" />
      {children}
      <CloudLogo className="cq-auth-bg__cloud-bottom" fill="var(--mantine-primary-color-9)" />
      <AppFooter />
    </Container>
  );
};

export default AuthLayout;
