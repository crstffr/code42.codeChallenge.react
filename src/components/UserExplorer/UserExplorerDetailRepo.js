import React from 'react';
import Utils from '../../utils/utils';
import {Label, List, Icon, Grid} from 'semantic-ui-react';

export default ({repo}) => {

  let language = (repo.language)
    ? <Label horizontal basic size='mini' color='grey' className='languageLabel'>
        {repo.language}
      </Label>
    : '';

  return (
    <List.Item key={repo.id} className='UserExplorerDetailRepo'>
      <List.Content>

        <List.Header>
          <a href={repo.html_url}>{repo.full_name}</a>
          {language}
        </List.Header>

        <List.Description>
          {repo.description}
        </List.Description>

        <List.Description>
          <Grid>
            <Grid.Row>
              <Grid.Column width={6}>
                <Grid columns='equal'>
                  <Grid.Column textAlign='left'>
                    <Icon name='star'/> {Utils.formatNum(repo.stargazers_count)}
                  </Grid.Column>
                  <Grid.Column textAlign='center'>
                    <Icon name='fork'/> {Utils.formatNum(repo.forks_count)}
                  </Grid.Column>
                  <Grid.Column textAlign='right'>
                    <Icon name='bug'/> {Utils.formatNum(repo.open_issues)}
                  </Grid.Column>
                </Grid>
              </Grid.Column>
              <Grid.Column width={10} textAlign='right'>
                Updated {Utils.formatDate(repo.updated_at)}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </List.Description>
      </List.Content>
    </List.Item>
  )
}
