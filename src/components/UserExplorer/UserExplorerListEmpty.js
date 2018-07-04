import React from 'react';
import {Grid, Header} from 'semantic-ui-react';

export default () => (
  <Grid>
    <Grid.Column verticalAlign='middle' textAlign='center'>
      <Header as='h4' icon textAlign='center'>
        <Header.Content>No Users Found</Header.Content>
      </Header>
    </Grid.Column>
  </Grid>
)
