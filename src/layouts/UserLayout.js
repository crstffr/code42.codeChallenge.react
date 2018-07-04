import React from 'react';
import {Grid, Segment} from 'semantic-ui-react';
import UserExplorer from '../components/UserExplorer/UserExplorer';
import Footer from '../components/Footer';
import './UserLayout.css';

export default class extends React.Component {
  render () {
    return (
      <Grid className='UserLayout' verticalAlign='middle'>

        <Grid.Column width={3}/>

        <Grid.Column width={10} className='UserExplorerContainer'>

          <Segment className='UserExplorer' >
            <UserExplorer org='github' user={this.props.user}/>
          </Segment>

          <Footer/>

        </Grid.Column>

        <Grid.Column width={3}/>
      </Grid>
    )

  }
}

