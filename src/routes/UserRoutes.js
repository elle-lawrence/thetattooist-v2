import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Favorites from '../views/Favorites';
// import Home from '../views/Home';
import { ShowAllArtists } from '../views/ShowAllArtists';
import ArtistsDetailsView from '../views/ArtistDetailsView';
import SearchName from '../views/SearchName';
// import SearchGender from '../views/SearchGender';
import ProfileView from '../views/ProfileView';
import SearchView from '../views/SearchView';

export default function UserRoutes({ user }) {
  return (
    <Switch>
      <Route
        exact
        path="/home"
        component={() => <ShowAllArtists user={user} />}
      />
      <Route
        exact
        path="/artists"
        component={() => <ShowAllArtists user={user} />}
      />
      <Route exact path="/artists/:key" component={() => <ArtistsDetailsView user={user} />} />
      <Route
        exact
        path="/searchname"
        component={() => <SearchName user={user} />}
      />
      <Route
        exact
        path="/searchgender"
        component={() => <SearchView user={user} />}
      />
      <Route
        exact
        path="/favorites"
        component={() => <Favorites user={user} />}
      />
      <Route
        exact
        path="/profiles/:firebaseKey"
        component={() => <ProfileView user={user} />}
      />
    </Switch>
  );
}

UserRoutes.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

UserRoutes.defaultProps = {
  user: null,
};
