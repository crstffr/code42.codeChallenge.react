import React from 'react';
import {withRouter} from 'react-router-dom';
import {Dropdown} from 'semantic-ui-react';
import Options from '../options';

class OrgSelector extends React.Component {

  onChange(e, {value}) {
    this.props.history.push(`/${value}/`);
  }

  render() {
    return (
      <Dropdown inline
                options={Options.orgs}
                value={this.props.org}
                onChange={this.onChange.bind(this)} />
    )
  }
}

export default withRouter(OrgSelector);
