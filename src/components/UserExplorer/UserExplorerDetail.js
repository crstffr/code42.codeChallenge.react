import React from 'react';
import {withRouter} from 'react-router-dom';
import {Message, Header, Statistic, Grid, Image, Item, List} from 'semantic-ui-react';
import UserExplorerDetailRepo from './UserExplorerDetailRepo';
import Options from '../../options';
import Utils from '../../utils/utils';

let UserExplorerDetail = ({user, match}) => {

  let currentOrgImage = '';
  let currentOrg = match.params.org;

  Options.orgs.filter(org => {
    if (org.value === currentOrg) {
      currentOrgImage = org.image.src;
    }
    return org;
  });

  if (!user.login) {

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
            <Image src={currentOrgImage} className='icon medium'/>
            <Header.Content>Select User</Header.Content>
          </Header>
        </Grid.Column>
      </Grid>
    )
  }

  let email = (user.email)
    ? <Item.Meta>
        Email: {user.email}
      </Item.Meta>
    : '';

  let location = (user.location)
    ? <Item.Meta>
        From: {user.location}
      </Item.Meta>
    : '';

  let repos = user.repos.map((repo) => (
    <UserExplorerDetailRepo key={repo.id} repo={repo}/>
  ));

  return (
    <Item.Group>

      <Item>
        <Item.Image as={Image} src={user.avatar_url} size='small' rounded bordered />
        <Item.Content>
          <Item.Header as='h2'>
            <a href={user.html_url}>{user.name || user.login}</a>
          </Item.Header>
          <Item.Meta>
            Member Since: {Utils.formatDate(user.created_at)}
          </Item.Meta>
          {email}
          {location}
        </Item.Content>
      </Item>

      <Item>
        <Item.Content>
          <Message>
            <Statistic.Group size='mini' widths='three'>
              <Statistic>
                <Statistic.Value>{Utils.formatNum(user.followers)}</Statistic.Value>
                <Statistic.Label>Followers</Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value>{Utils.formatNum(user.public_repos)}</Statistic.Value>
                <Statistic.Label>Repos</Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value>{Utils.formatNum(user.public_gists)}</Statistic.Value>
                <Statistic.Label>Gists</Statistic.Label>
              </Statistic>
            </Statistic.Group>
          </Message>
        </Item.Content>
      </Item>

      <List divided relaxed='very'>
        {repos}
      </List>
    </Item.Group>
  )
};

export default withRouter(UserExplorerDetail);
