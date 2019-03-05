import React from 'react'
import { Route, Switch } from 'react-router-dom';

import LoginCont from '../containers/Login/Login.container';

const MainLayout = ({ match }) => {
  return (
    <div className="main-layout">
      <main>
        <Switch>
          <Route path={`${match.path}login`} component={LoginCont}/>
        </Switch>
      </main>
    </div>
  );
};
export default MainLayout;