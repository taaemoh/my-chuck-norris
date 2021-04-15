import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import JokesPage from '../components/pages/jokes/jokesPage';
import ErrorPage404 from './errorPage404';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={(props) => <JokesPage {...props} />} />
        <Route path='*' exact={true} component={ErrorPage404} />
      </Switch>
    </BrowserRouter>
  );
}
