import React from 'react';
import {Grid, Header, Image} from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';
import Options from "../../options";

let UserExplorerDetailEmpty = ({match}) => {

  let image = '';
  let org = match.params.org;

  Options.orgs.forEach(option => {
    if (option.value === org) {
      image = <Image src={option.image.src} className='icon medium'/>
    }
  });

  let verticalAlign = {
    top: '50%',
    left: '50%',
    position: 'absolute',
    marginLeft: '-60px',
    marginTop: '-40px'
  };

  return (
    <Grid className='UserExplorerDetailEmpty'>
      <Grid.Column verticalAlign='middle' textAlign='center'>
        <Header as='h2' icon textAlign='center' style={verticalAlign}>
          {image}
          <Header.Content>Select User</Header.Content>
        </Header>
      </Grid.Column>
    </Grid>
  )
};

export default withRouter(UserExplorerDetailEmpty);
