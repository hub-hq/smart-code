import * as React from 'react';
import { RouteObject, useRoutes } from 'react-router';
import Loadable from 'src/components/Loadable';
import Theme from 'src/components/Theme';

const HomePage = Loadable(React.lazy(() => import('src/pages/Home')));
const CodePage = Loadable(React.lazy(() => import('src/pages/Code')));

const MainRoutes: RouteObject = {
  path: '/',
  element: <HomePage />,
  children: [
    {
      path: '/',
      element: <CodePage />,
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <CodePage />,
        },
      ],
    },
  ],
};

const App: React.FC = () => {
  const routes = useRoutes([MainRoutes]);

  return <Theme>{routes}</Theme>;
};

export default App;
