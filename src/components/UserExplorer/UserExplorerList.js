import React from 'react';
import {Grid, Header, List} from 'semantic-ui-react';
import UserExplorerListItem from './UserExplorerListItem';

export default ({users}) => {

  if (!users.length) {
    return (
      <Grid>
        <Grid.Column verticalAlign='middle' textAlign='center'>
          <Header as='h4' icon textAlign='center'>
            <Header.Content>No Users Found</Header.Content>
          </Header>
        </Grid.Column>
      </Grid>
    )
  }

  let items = users.map((user) => (
    <UserExplorerListItem key={user.id} user={user}/>
  ));

  return (
    <List selection verticalAlign='middle' className='UserExplorerList'>
      {items}
    </List>
  )

}
