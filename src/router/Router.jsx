import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';

import Home from '../pages/Home';
import SceneSelect from '../pages/SceneSelect';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'scene', element: <SceneSelect /> },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
