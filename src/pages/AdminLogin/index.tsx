import { rem } from '@mantine/core';
import AuthLayout from '@/layouts/AuthLayout';
import FormLayout from '@/layouts/FormLayout';

import AdminForm from '@/components/AdminForm';
import AssetRender from '@/components/AssetRender';

import flyImage from '@/assets/fly.png';
import winkImage from '@/assets/wink.png';

const AdminLogin = () => (
  <AuthLayout>
    <FormLayout>
      <AssetRender
        boxConfig={{
          pos: 'absolute',
          top: rem(60),
          right: { base: -16, md: 120 },
        }}
        imageConfig={{
          h: { base: 200, md: 350 },
          w: rem(250),
          fit: 'contain',
          src: flyImage,
        }}
      />

      <AdminForm />

      <AssetRender
        boxConfig={{
          pos: 'absolute',
          bottom: 0,
          left: { base: 24, md: 120 },
        }}
        imageConfig={{
          h: { base: 200, md: 280 },
          fit: 'contain',
          w: { base: 200, md: 280 },
          src: winkImage,
        }}
      />
    </FormLayout>
  </AuthLayout>
);

export default AdminLogin;
