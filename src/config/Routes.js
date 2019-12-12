import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../containers/HomeContainer';
import Ehpad from '../containers/pages/EhpadContainer';
import Hopital from '../containers/pages/HopitalContainer';
import ServiceCivique from '../containers/pages/ServiceCiviqueContainer';
import Tutorat from '../containers/pages/TutoratContainer';

const Routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/ehpad" component={Ehpad} />
    <Route exact path="/hopital" component={Hopital} />
    <Route exact path="/service-civique" component={ServiceCivique} />
    <Route exact path="/tutorat" component={Tutorat} />
  </Switch>
);

export default Routes;
