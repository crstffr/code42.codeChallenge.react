import React from 'react';
import {Grid, Header, Icon} from 'semantic-ui-react';

export default ({user}) => {

  if (!user.name) {
    return (
      <Grid>
        <Grid.Column verticalAlign='middle' textAlign='center'>
          <Header as='h2' icon textAlign='center'>
            <Icon name='github' color='black' circular />
            <Header.Content>Select User</Header.Content>
          </Header>
        </Grid.Column>
      </Grid>
    )
  }

  return (
    <h3>
      {user.name}
    </h3>
  )
}
