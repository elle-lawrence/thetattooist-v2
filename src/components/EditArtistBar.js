import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from '@mui/material/ButtonGroup';
import { getAllArtists } from '../api/data/artists';
import EditButton from './buttons/EditButton';
import DeleteButton from './buttons/DeleteButton';

export default function EditArtistBar({ singleArtist }) {
  const [resetAllArtists, setResetAllArtists] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllArtists().then((artists) => {
      if (isMounted) setResetAllArtists(artists);
    });
    return () => {
      isMounted = false;
    };
  }, [resetAllArtists]);
  return (
    <>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <EditButton firebase={singleArtist.firebaseKey} />
        <DeleteButton
          firebaseKey={singleArtist.firebaseKey}
          setResetAllArtists={setResetAllArtists}
        />
      </ButtonGroup>
    </>
  );
}
EditArtistBar.propTypes = {
  singleArtist: PropTypes.shape({
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
    city: PropTypes.string,
    gender: PropTypes.string,
    orientation: PropTypes.string,
    hourlyRt: PropTypes.string,
    instagram: PropTypes.string,
    availability: PropTypes.string,
    shopName: PropTypes.string,
    shopUrl: PropTypes.string,
    portfolioUrl: PropTypes.string,
    thumbnailImg: PropTypes.string,
    img1: PropTypes.string,
    img2: PropTypes.string,
    img3: PropTypes.string,
  }).isRequired,
};
