import React from 'react';
// import { VscSignOut } from 'react-icons/vsc';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOutUser } from '../../api/auth';

export default function SignOutButton() {
  return (
    <>
      {/* <button
        type="button"
        className="sign-btn btn btn-outline-light"
        onClick={signOutUser}
      >
        <VscSignOut />
      </button> */}
      <Button
        size="small"
        variant="outlined"
        onClick={signOutUser}
      >
        <LogoutIcon />
      </Button>
    </>
  );
}
