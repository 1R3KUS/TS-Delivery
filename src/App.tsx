import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import { Header, Footer } from './components';
import { HomePage, Restaurant, Cart } from './components/pages';

const App: FunctionComponent = () => {
  const { activeRestItem, activeItem } = useSelector((state: any) => state.activeRests);

  return (
    <div className="App">
      <Header />
      <div className="content">
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path={`/rest/${activeItem}`}
          render={() => <Restaurant activeRestItem={activeRestItem} activeItem={activeItem} />}
        />
        <Route path="/cart" component={Cart} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
