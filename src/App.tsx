import React, { FunctionComponent } from 'react';
import { Header } from './components';
import { HomePage } from './components/pages';

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <HomePage />
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
