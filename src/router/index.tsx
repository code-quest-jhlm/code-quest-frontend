import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AdminLogin from '@/pages/AdminLogin';
import ClientLogin from '@/pages/ClientLogin';
import HomePage from '@/pages/HomePage';
import DrawPage from '@/pages/DrawPage';

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
  {
    path: '/draw',
    element: <DrawPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
