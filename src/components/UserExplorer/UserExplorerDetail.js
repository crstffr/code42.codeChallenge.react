import React from 'react';
import {withRouter} from 'react-router-dom';
import {Message, Statistic, Image, Item, List} from 'semantic-ui-react';
import UserExplorerDetailEmpty from './UserExplorerDetailEmpty';
import UserExplorerDetailRepo from './UserExplorerDetailRepo';
import Utils from '../../utils/utils';

let UserExplorerDetail = ({user, match}) => {

  if (!user.login) {
    return <UserExplorerDetailEmpty/>
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
