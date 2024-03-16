import AuthLayout from '@/layouts/AuthLayout';
import FormLayout from '@/layouts/FormLayout';

import AdminForm from '@/components/AdminForm';
import ClientForm from '@/components/ClientForm';

export function HomePage() {
  return (
    <AuthLayout>
      <FormLayout>
        <ClientForm />
      </FormLayout>

      <FormLayout>
        <AdminForm />
      </FormLayout>
    </AuthLayout>
  );
}
