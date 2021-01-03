import React, { FunctionComponent } from 'react';

import { Footer, Header } from './components';
import { HomePage } from './components/pages';

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <HomePage />
      </div>
      <Footer />
    </div>
  );
};

export default App;
