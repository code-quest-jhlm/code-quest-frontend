import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AdminLogin from '@/pages/AdminLogin';
import ClientLogin from '@/pages/ClientLogin';
import HomePage from '@/pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AdminLogin />,
  },
  {
    path: '/client',
    element: <ClientLogin />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
