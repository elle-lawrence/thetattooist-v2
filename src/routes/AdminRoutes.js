import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AdminView from '../views/AdminView';
import NewArtist from '../views/NewArtist';
import EditArtistView from '../views/EditArtistView';

export default function AdminRoutes({ user }) {
  return (
    <Switch>
      <Route exact path="/admin" component={() => <AdminView user={user} />} />
      <Route exact path="/add" component={NewArtist} />
      <Route exact path="/edit/:firebase" component={() => <EditArtistView user={user} />} />
    </Switch>
  );
}

AdminRoutes.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

AdminRoutes.defaultProps = {
  user: null,
};
