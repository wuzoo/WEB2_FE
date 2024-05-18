import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Selector from '../pages/Selector';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'chating', element: <Funnel /> },
      { path: 'onboarding-select', element: <Selector /> },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
