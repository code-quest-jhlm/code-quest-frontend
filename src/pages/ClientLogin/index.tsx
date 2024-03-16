import FormLayout from '@/layouts/FormLayout';
import AuthLayout from '@/layouts/AuthLayout';

import ClientForm from '@/components/ClientForm';

const ClientLogin = () => (
  <AuthLayout>
    <FormLayout title="Sorteo 200k" variant="client">
      <ClientForm />
    </FormLayout>
  </AuthLayout>
);

export default ClientLogin;
