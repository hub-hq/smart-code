import * as React from 'react';
import Loader from 'src/components/Loader';

const Loadable = (Component: any) => (props: any) =>
  (
    <React.Suspense fallback={<Loader />}>
      <Component {...props} />
    </React.Suspense>
  );

export default Loadable;
