import { Box, Title } from '@mantine/core';
import { FC, ReactNode } from 'react';

import './FormLayout.scss';

interface FormLayoutProps {
  title?: string;
  variant?: 'admin' | 'client';
  children: ReactNode;
}

const FormLayout: FC<FormLayoutProps> = ({ title = 'Iniciar sesión', variant = 'admin', children }) => (
  <>
    <Box className={`cq-form-wrapper-shadow ${variant}`} />
    <Box className="cq-form-bg">
      <>
        <Title order={3} className="cq-form-bg__title">
          {title}
        </Title>
        {children}
      </>
    </Box>
  </>
);

export default FormLayout;
