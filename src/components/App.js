import React from 'react';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import UserLayout from '../layouts/UserLayout'

export default class App extends React.Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route path="/users/:user?" render={({match}) => (
            <UserLayout user={match.params.user}/>
          )}/>
          <Route render={() => (
            <Redirect to="/users"/>
          )}/>
        </Switch>
      </HashRouter>
    )
  }
}
