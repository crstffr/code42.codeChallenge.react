import React from 'react';
import {Grid, Segment} from 'semantic-ui-react';
import OrgSelector from '../components/OrgSelector';
import UserExplorer from '../components/UserExplorer/UserExplorer';
import Footer from '../components/Footer';
import './UserLayout.css';

export default ({org, user}) => (
  <Grid columns='equal'
        verticalAlign='middle'
        className='UserLayout'>
    <Grid.Column/>
    <Grid.Column width={10} className='UserExplorerContainer'>
          <span>
            Show Users from {' '}
            <OrgSelector org={org}/>
          </span>
      <Segment className='UserExplorer' >
        <UserExplorer org={org} user={user}/>
      </Segment>
      <Footer/>
    </Grid.Column>
    <Grid.Column/>
  </Grid>
)
