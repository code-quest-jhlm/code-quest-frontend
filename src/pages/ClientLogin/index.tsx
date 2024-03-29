import { useEffect } from 'react';
import { Navigate, useParams, useSearchParams } from 'react-router-dom';
import FormLayout from '@/layouts/FormLayout';
import AuthLayout from '@/layouts/AuthLayout';

import ClientForm from '@/components/ClientForm';
import AssetRender from '@/components/AssetRender';

import normalFace from '@/assets/normal_face.png';
import useDrawAdministration from '@/hooks/useDrawAdministration';

const ClientLogin = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const { getDraw, currentDraw, isErrorCurrentDraw } = useDrawAdministration();

  useEffect(() => {
    getDraw(params.id!);
  }, []);

  if (isErrorCurrentDraw) {
    return <Navigate to="/" replace />;
  }

  return (
    <AuthLayout>
      <FormLayout title={currentDraw?.title ?? ''} variant="client">
        <ClientForm drawItem={currentDraw!} isEnrolled={searchParams.get('enroll') === '0'} />
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
};

export default ClientLogin;
