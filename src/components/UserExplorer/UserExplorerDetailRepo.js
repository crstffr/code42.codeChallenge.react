import React from 'react';
import Utils from '../../utils/utils';
import {Label, List, Icon, Grid} from 'semantic-ui-react';

export default class extends React.Component {

  render() {

    let language = (this.props.repo.language)
      ? <Label horizontal basic size='mini' color='grey' className='languageLabel'>
          {this.props.repo.language}
        </Label>
      : '';

    return (
      <List.Item key={this.props.repo.id} className='UserExplorerDetailRepo'>
        <List.Content>

          <List.Header>
            <a href={this.props.repo.html_url}>{this.props.repo.full_name}</a>
            {language}
          </List.Header>

          <List.Description>
            {this.props.repo.description}
          </List.Description>

          <List.Description>
            <Grid>
              <Grid.Row>
                <Grid.Column width={6}>
                  <Grid columns='equal'>
                    <Grid.Column textAlign='left'>
                      <Icon name='star'/> {Utils.formatNum(this.props.repo.stargazers_count)}
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                      <Icon name='fork'/> {Utils.formatNum(this.props.repo.forks_count)}
                    </Grid.Column>
                    <Grid.Column textAlign='right'>
                      <Icon name='bug'/> {Utils.formatNum(this.props.repo.open_issues)}
                    </Grid.Column>
                  </Grid>
                </Grid.Column>
                <Grid.Column width={10} textAlign='right'>
                  Updated {Utils.formatDate(this.props.repo.updated_at)}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </List.Description>
        </List.Content>
      </List.Item>
    )
  }

}
