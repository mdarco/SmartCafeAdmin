import React from 'react';

import {Helmet} from 'react-helmet';
import SCAppBar from './components/SCAppBar';

const App = () => {
  return (
    <div>
      <Helmet>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Helmet>

      <SCAppBar></SCAppBar>
    </div>
  );
}

export default App;
