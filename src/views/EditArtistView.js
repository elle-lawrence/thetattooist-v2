import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Form from '../components/Form';
import { getSingleArtist } from '../api/data/artists';

export default function EditArtistView() {
  const [editArtist, setEditArtist] = useState({});
  const { firebase } = useParams();

  useEffect(() => {
    console.warn(firebase);
    let isMounted = true;
    getSingleArtist(firebase).then((artist) => {
      if (isMounted) setEditArtist(artist);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <Form artist={editArtist} />
    </>
  );
}

// EditArtist.propTypes = {
// user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
//   artist: PropTypes.shape({
//     name: artist.name,
//     city: artist.city,
//     firebaseKey: artist.firebaseKey,
//     gender: artist.gender,
//     orientation: artist.orientation,
//     hourlyRt: artist.hourlyRt,
//     instagram: artist.instagram,
//     availability: artist.availability,
//     shopName: artist.shopName,
//     portfolioUrl: artist.portfolioUrl,
//     thumbnailImg: artist.thumbnailImg,
//   }),
// };

// EditArtist.defaultProps = {
// user: null,
// };
