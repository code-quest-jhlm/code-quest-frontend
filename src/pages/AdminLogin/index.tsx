import AuthLayout from '@/layouts/AuthLayout';
import FormLayout from '@/layouts/FormLayout';

import AdminForm from '@/components/AdminForm';

const AdminLogin = () => (
  <AuthLayout>
    <FormLayout>
      <AdminForm />
    </FormLayout>
  </AuthLayout>
);

export default AdminLogin;
