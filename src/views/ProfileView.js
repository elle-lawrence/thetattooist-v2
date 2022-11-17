import React from 'react';
import PropTypes from 'prop-types';
import { VscDiffAdded } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import SignOutButton from '../components/buttons/SignOutButton';
import SignInButton from '../components/buttons/SignInButton';

export default function ProfileView({ user }) {
  return (
    <>
      {user ? (
        <h2>
          PROFILE Here
        </h2>
      ) : (<h2>no</h2>)}
      {user ? (
        <>
          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
      {user?.isAdmin ? (
        <>
          <Link className="linkStyling" to="/add">
            <VscDiffAdded />
          </Link>
        </>
      ) : (
        <></>)}
    </>
  );
}
ProfileView.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

ProfileView.defaultProps = {
  user: null,
};
