import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import IconButton from '@mui/material/IconButton';
import ToggleButton from '@mui/material/ToggleButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { createFavorite, getAllFavorites, deleteFavorite } from '../../api/data/favoritesData';

export default function FavButton({ artist, user }) {
  const [selected, setSelected] = useState(false);
  const [fav, setFav] = useState({});

  const getIsFavorite = () => {
    getAllFavorites(user.uid).then((favorites) => {
      const artistFav = favorites.find((favorite) => favorite.artistId === artist.firebaseKey);
      setSelected(!!(artistFav?.firebaseKey));
      setFav(artistFav);
    });
  };

  useEffect(() => {
    getIsFavorite();
  }, []);

  const handleSubmit = (value) => {
    console.warn(value);
    if (value === 'check') {
      createFavorite({ artistId: artist.firebaseKey, uid: user.uid }).then(getIsFavorite);
    } else {
      deleteFavorite(fav).then(getIsFavorite);
    }
  };
  return (
  // <IconButton
  //   aria-label="delete"
  //   size="large"
  //   checked={isChecked}
  //   onChange={handleSubmit}
  // >

  // </IconButton>
    <ToggleButton
      value="check"
      selected={selected}
      onChange={handleSubmit}
    >
      <FavoriteBorderIcon fontSize="inherit" />
    </ToggleButton>
  );
}

FavButton.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
  }).isRequired,
  artist: PropTypes.shape({
    firebaseKey: PropTypes.string,
  }).isRequired,
};
