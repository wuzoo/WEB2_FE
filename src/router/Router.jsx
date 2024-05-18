import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Funnel from '../pages/funnel/Funnel';
import Home from '../pages/Home';
import SceneSelect from '../pages/SceneSelect';
import Selector from '../pages/Selector';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'chating', element: <Funnel /> },
      { path: 'scene', element: <SceneSelect /> },
      { path: 'onboarding-select', element: <Selector /> },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
