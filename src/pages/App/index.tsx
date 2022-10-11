import * as React from 'react';
import { useRoutes } from 'react-router';
import Loadable from 'src/components/Loadable';
import Theme from 'src/components/Theme';

const HomePage = Loadable(React.lazy(() => import('src/pages/Code')));
const CodePage = Loadable(React.lazy(() => import('src/pages/Code')));

const MainRoutes = {
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
