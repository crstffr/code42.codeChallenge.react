import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Image, List } from 'semantic-ui-react'

class UserExplorerListItem extends React.Component {
  render() {

    let orgName = this.props.match.params.org;
    let userName = this.props.user.login;
    let userImage = this.props.user.avatar_url;

    return (
      <List.Item as={NavLink}
                 to={`/${orgName}/${userName}`}
                 className='UserExplorerListItem'>
        <Image size='mini' circular src={userImage} />
        <List.Content>
          <List.Header>{userName}</List.Header>
        </List.Content>
      </List.Item>
    )
  }
}

export default withRouter(UserExplorerListItem);
