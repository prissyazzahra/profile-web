import React from 'react';
import { ThemeProvider } from 'styled-components';

import Loader from './Loader';

import theme from './theme';

function App() {
    return (
      <ThemeProvider theme={theme}>
        <Loader />
      </ThemeProvider>
    )
}

export default App;
