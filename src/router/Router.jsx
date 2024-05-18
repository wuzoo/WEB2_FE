import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Funnel from '../pages/funnel/Funnel';
import Home from '../pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'chating', element: <Funnel /> },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
