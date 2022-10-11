import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import * as React from 'react';

// styles
const LoaderWrapper = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1301,
  width: '100%',
});

const Loader: React.FC = () => (
  <LoaderWrapper>
    <LinearProgress color='primary' />
  </LoaderWrapper>
);

export default Loader;
