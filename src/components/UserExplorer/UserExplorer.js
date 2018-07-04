import React from 'react';
import UserList from './UserExplorerList';
import UserDetail from './UserExplorerDetail';
import UserService from '../../services/UserService';
import { Grid, Dimmer, Loader } from 'semantic-ui-react'

export default class extends React.Component {

  state = {
    org: '',
    user: {},
    users: [],
    loadingUsers: true,
    loadingDetail: true
  };

  fetchUsers(org) {
    this.setState({loadingUsers: true});
    return UserService.fetchUsersInOrg(org)
      .then((users) => {
        this.setState({org, users});
      }).finally(() => {
        this.setState({loadingUsers: false});
      });
  }

  fetchDetails(user) {
    this.setState({loadingDetail: true});
    return Promise.all([
      UserService.fetchUserProfile(user),
      UserService.fetchUserRepos(user)
    ]).then(([user, repos]) => {
      user.repos = repos;
      this.setState({user});
    }).finally(() => {
      this.setState({loadingDetail: false});
    });
  }

  componentWillReceiveProps({user, org}) {
    if (org !== this.state.org) {
      this.fetchUsers(org);
    }
    if (user !== this.state.user.login) {
      this.fetchDetails(user);
    }
  }

  componentWillMount() {
    this.fetchUsers(this.props.org);
    this.fetchDetails(this.props.user);
  }

  render() {

    let listClassName = 'UserExplorerListContainer';
    let detailClassName = 'UserExplorerDetailContainer';

    let loader = (
      <Dimmer active inverted>
        <Loader size='medium'>Loading</Loader>
      </Dimmer>
    );

    let userList = (!this.state.loadingUsers)
      ? <UserList org={this.state.org} users={this.state.users} />
      : loader;

    let userDetail = (!this.state.loadingDetail)
      ? <UserDetail user={this.state.user} />
      : loader;

    return (
      <Grid columns={2} divided>
        <Grid.Row stretched>
          <Grid.Column width={6} className={listClassName}>
            {userList}
          </Grid.Column>
          <Grid.Column width={10} className={detailClassName}>
            {userDetail}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
