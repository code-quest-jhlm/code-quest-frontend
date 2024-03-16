import { Box, Title } from '@mantine/core';
import { FC, ReactNode } from 'react';

import './FormLayout.scss';

interface FormLayoutProps {
  title?: string;
  variant?: 'admin' | 'client';
  children: ReactNode;
}

const FormLayout: FC<FormLayoutProps> = ({ title = 'Iniciar sesión', children }) => (
  <>
    <Box className="cq-form-wrapper-shadow" />
    <Box className="cq-form-bg">
      <>
        <Title order={3} mx="auto">
          {title}
        </Title>
        {children}
      </>
    </Box>
  </>
);

export default FormLayout;
