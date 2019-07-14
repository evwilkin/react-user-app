import React from 'react';
import UserItem from './UserItem';
import { Link } from 'react-router-dom';

const ShowUser = props => {
  const userId = Number(props.match.params.id);
  const user = props.users.filter(user => user.id === userId)[0];

  return (
    <div className="container-fluid">
      <ul className="pager">
        <li className="previous">
          <Link to="/">
            <span className="i fa fa-angle-left"></span>
            Back
          </Link>
        </li>
      </ul>
      <div className="list-group tree-list-view-pf">
        { typeof user === 'object' && Object.keys(user).map((objKey, idx) => (
          <UserItem objKey={objKey} user={user} key={idx}/>
        )) }
      </div>
    </div>
  );
}

export default ShowUser;
