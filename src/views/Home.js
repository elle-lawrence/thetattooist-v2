import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchGenderButton from '../components/buttons/SearchGenderButton';
import SearchNameButton from '../components/buttons/SearchNameButton';
import SeeFavoritesButton from '../components/buttons/SeeFavoritesButton';
import ShowAllButton from '../components/buttons/ShowAllButton';
import SignOutButton from '../components/buttons/SignOutButton';
import SignInButton from '../components/buttons/SignInButton';

const GroupButtonStyling = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .btn-style{
    border: none;
    color: #555555;
    font-family: 'Nunito', sans-serif;
  }
`;
export default function Home({ user }) {
  return (
    <>
      {user ? (
        <>
          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
      <div className="titleDiv">
        <p className="title">the tattooist</p>
      </div>
      <GroupButtonStyling>
        <SearchNameButton />
        <SearchGenderButton />
        <ShowAllButton />
        {user ? <SeeFavoritesButton user={user} /> : <></>}
      </GroupButtonStyling>
    </>
  );
}
Home.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

Home.defaultProps = {
  user: null,
};
