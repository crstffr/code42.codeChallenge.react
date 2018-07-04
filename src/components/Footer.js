import React from 'react';
import {Grid, List, Icon} from 'semantic-ui-react';

export default () => (
  <Grid>
    <Grid.Column width={12} textAlign='left'>
      <List horizontal size='tiny'>
        <List.Item>
          Built by <a rel='noopener noreferrer' target='_blank'
                      href='https://crstffr.format.com'>Christopher Mason</a> using React 16 and Semantic UI
        </List.Item>
      </List>
    </Grid.Column>
    <Grid.Column width={4} textAlign='right'>
      <List horizontal link size='small' verticalAlign='middle'>
        <List.Item as='a' href='mailto:crstffr@gmail.com'>
          <Icon name='mail'/>
        </List.Item>
        <List.Item as='a' href='https://github.com/crstffr' target='_blank'>
          <List.Icon name='github'/>
        </List.Item>
        <List.Item as='a' href='https://www.linkedin.com/in/crstffr/' target='_blank'>
          <List.Icon name='linkedin'/>
        </List.Item>
      </List>
    </Grid.Column>
  </Grid>
)
