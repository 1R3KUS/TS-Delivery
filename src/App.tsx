import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import { Footer, Header } from './components';
import { HomePage, Restaurant } from './components/pages';

const App: FunctionComponent = () => {
  const { rest } = useSelector((state: any) => state.rests);
  const { activeItem } = useSelector((state: any) => state.activeRests);

  const activeRest = rest.filter((item: any) => item.id === activeItem);

  return (
    <div className="App">
      <Header />
      <div className="content">
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path={`/rest/${activeItem}`}
          render={() => <Restaurant items={activeRest} />}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
