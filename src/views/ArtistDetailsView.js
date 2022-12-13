import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getSingleArtist } from '../api/data/artists';
import ArtistDetailsCard from '../components/ArtistDetailsCard';

export default function ArtistDetailsView({ user }) {
  const { key } = useParams();
  const [singleArtist, setSingleArtist] = useState({});
  // const [images, setImages] =
  useEffect(() => {
    getSingleArtist(key).then(setSingleArtist);
  }, []);

  return (
    <div>
      <>
        <ArtistDetailsCard singleArtist={singleArtist} user={user} />
      </>
    </div>
  );
}

ArtistDetailsView.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),

};

ArtistDetailsView.defaultProps = {
  user: null,
};
