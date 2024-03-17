import { Container, rem } from '@mantine/core';
import { FC, ReactNode } from 'react';

import CloudLogo from '@/components/CloudLogo';
import AppFooter from '@/components/AppFooter';
import AssetRender from '@/components/AssetRender';

import devtallesLightLogo from '@/assets/detalles_light_logo.png';

import './AuthLayout.scss';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => (
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

export default AuthLayout;
