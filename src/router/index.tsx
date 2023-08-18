import {createBrowserRouter} from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    loader: () => ({}),
    element: <Layout />,
    children: [
      {
        index: true,
        Component() {
          return <Home />;
        },
      },
    ],
  },
]);

export default router;
