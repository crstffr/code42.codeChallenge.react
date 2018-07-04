import React from 'react';
import {List} from 'semantic-ui-react';
import UserExplorerListItem from './UserExplorerListItem';

export default ({users}) => {

  if (!users.length) {
    return (
      <div>
        No Users Found
      </div>
    )
  }

  let items = users.map((user) => (
    <UserExplorerListItem key={user.id} user={user}/>
  ));

  return (
    <List selection verticalAlign='middle' className='UserExplorerList'>
      {items}
    </List>
  )

}
