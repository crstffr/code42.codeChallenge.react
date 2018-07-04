import React from 'react';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import UserLayout from './layouts/UserLayout'
import Options from './options';

export default class App extends React.Component {
  render () {

    let defaultOrg = Options.orgs[0].value;

    return (
      <HashRouter basename={`${process.env.PUBLIC_URL}/`}>
        <Switch>
          <Route path="/:org/:user?" render={({match}) => (
            <UserLayout org={match.params.org} user={match.params.user}/>
          )}/>
          <Route render={() => (
            <Redirect to={`/${defaultOrg}`}/>
          )}/>
        </Switch>
      </HashRouter>
    )
  }
}
