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

  async fetchUsers(org) {
    this.setState({loadingUsers: true});
    let result = await UserService.fetchUsersInOrg(org);
    this.setState({loadingUsers: false});
    return result;
  }

  async fetchUser(user) {
    this.setState({loadingUser: true});
    let result = await UserService.fetchUserProfile(user);
    this.setState({loadingUser: false});
    return result;
  }

  async componentWillReceiveProps({user}) {
    this.setState({
      user: await this.fetchUser(user)
    });
  }

  async componentWillMount() {
    this.setState({
      user: await this.fetchUser(this.props.user),
      users: await this.fetchUsers(this.props.org)
    });
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
      <Grid columns={2} centered divided>
        <Grid.Row stretched>
          <Grid.Column className={listContainer}>{userList}</Grid.Column>
          <Grid.Column className={detailContainer}>{userDetail}</Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
