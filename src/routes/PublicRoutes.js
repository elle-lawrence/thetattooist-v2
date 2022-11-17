import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';

export default function PublicRoutes({ user }) {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={() => <Home user={user} />}
      />
    </Switch>
  );
}

PublicRoutes.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

PublicRoutes.defaultProps = {
  user: null,
};
