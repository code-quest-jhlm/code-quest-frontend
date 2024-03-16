import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AdminLogin from '@/pages/AdminLogin';
import ClientLogin from '@/pages/ClientLogin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AdminLogin />,
  },
  {
    path: '/client',
    element: <ClientLogin />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
