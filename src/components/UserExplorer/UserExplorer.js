import React from 'react';
import UserList from './UserExplorerList';
import UserDetail from './UserExplorerDetail';
import UserService from '../../services/UserService';
import { Grid, Dimmer, Loader } from 'semantic-ui-react'

export default class extends React.Component {

  state = {
    user: {},
    users: [],
    loadingUser: true,
    loadingUsers: true
  };

  fetchUsers(org) {
    this.setState({loadingUsers: true});
    return UserService.fetchUsersInOrg(org)
      .then((users) => {
        this.setState({users});
      }).finally(() => {
        this.setState({loadingUsers: false});
      });
  }

  fetchDetails(user) {
    this.setState({loadingUser: true});
    return Promise.all([
      UserService.fetchUserProfile(user),
      UserService.fetchUserRepos(user)
    ]).then(([user, repos]) => {
      user.repos = repos;
      this.setState({user});
    }).finally(() => {
      this.setState({loadingUser: false});
    });
  }

  componentWillReceiveProps({user}) {
    if (user === this.state.user.login) { return; }
    this.fetchDetails(user);
  }

  componentWillMount() {
    this.fetchUsers(this.props.org);
    this.fetchDetails(this.props.user);
  }

  render() {

    let listContainer = "UserExplorerListContainer";
    let detailContainer = "UserExplorerDetailContainer";

    let loader = (
      <Dimmer active inverted>
        <Loader size='medium'>Loading</Loader>
      </Dimmer>
    );

    let userList = (!this.state.loadingUsers)
      ? <UserList users={this.state.users} />
      : loader;

    let userDetail = (!this.state.loadingUser)
      ? <UserDetail user={this.state.user} />
      : loader;

    return (
      <Grid columns={2} divided>
        <Grid.Row stretched>
          <Grid.Column width={6} className={listContainer}>{userList}</Grid.Column>
          <Grid.Column width={10} className={detailContainer}>{userDetail}</Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
