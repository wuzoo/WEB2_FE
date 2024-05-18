import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Selector from '../pages/Selector';
import Home from '../pages/Home';
import ResultPage from '../pages/ResultPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'result', element: <ResultPage /> },
      { path: 'onboarding-select', element: <Selector /> },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
