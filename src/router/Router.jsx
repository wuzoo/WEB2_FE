import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';

import Selector from '../pages/Selector';
import Home from '../pages/Home';
import SceneSelect from '../pages/SceneSelect';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'scene', element: <SceneSelect /> },
      { path: 'onboarding-select', element: <Selector /> },

    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
