import React from 'react';

import Tooltip from '@material-ui/core/Tooltip';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import PersonIcon from '@material-ui/icons/Person';
import BlockIcon from '@material-ui/icons/Block';

import { useCurrentUser } from './firebase/authentication';

const UserStatus = () => {
  const currentUser = useCurrentUser();

  if (!currentUser) {
    return (
      <Tooltip title="Not signed in.">
        <span>
          <BlockIcon /> Not signed in.
        </span>
      </Tooltip>
    );
  }

  const { displayName, isAnonymous } = currentUser

  if (isAnonymous) {
    return (
      <Tooltip title="Signed in as guest.">
        <span>
          <PersonIcon /> {displayName}
        </span>
      </Tooltip>
    );
  }

  return (
    <Tooltip title="Signed in.">
      <span>
        <VerifiedUserIcon /> {displayName}
      </span>
    </Tooltip>
  );
};

export default UserStatus;
