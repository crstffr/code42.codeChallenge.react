import React from 'react';
import { NavLink } from 'react-router-dom';
import { Image, List } from 'semantic-ui-react'

export default class extends React.Component {
  render() {
    return (
      <List.Item as={NavLink}
                 to={`/users/${this.props.user.login}`}
                 className='UserExplorerListItem'>
        <Image size='mini' circular src={this.props.user.avatar_url} />
        <List.Content>
          <List.Header>{this.props.user.login}</List.Header>
        </List.Content>
      </List.Item>
    )
  }

}
