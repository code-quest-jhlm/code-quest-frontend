import FormLayout from '@/layouts/FormLayout';
import AuthLayout from '@/layouts/AuthLayout';

import ClientForm from '@/components/ClientForm';
import AssetRender from '@/components/AssetRender';

import normalFace from '@/assets/normal_face.png';

const ClientLogin = () => (
  <AuthLayout>
    <FormLayout title="Sorteo 200k" variant="client">
      <ClientForm />
    </FormLayout>
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
          src: normalFace,
        }}
      />
  </AuthLayout>
);

export default ClientLogin;
