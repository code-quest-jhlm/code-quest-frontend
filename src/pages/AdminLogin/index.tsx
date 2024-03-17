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
          right: rem(120),
        }}
        imageConfig={{
          h: rem(350),
          w: rem(250),
          src: flyImage,
        }}
      />

      <AdminForm />

      <AssetRender
        boxConfig={{
          pos: 'absolute',
          bottom: 0,
          left: rem(120),
        }}
        imageConfig={{
          h: rem(280),
          w: rem(280),
          src: winkImage,
        }}
      />
    </FormLayout>
  </AuthLayout>
);

export default AdminLogin;
