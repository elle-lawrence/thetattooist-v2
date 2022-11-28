import React from 'react';
// import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
// import FavoriteCheck from './FavoriteCheck';
// import DeleteButton from './buttons/DeleteButton';
// import EditButton from './buttons/EditButton';
// import DetailsButton from './buttons/DetailsButton';

export default function ArtistCard({
  artist,
  // firebaseKey,
  // setAllArtists,
  // favArtist,
  // user,
}) {
  const history = useHistory();

  const handleClick = () => {
    // const path = { firebaseKey };
    history.push(`/artists/${artist.firebaseKey}`);
  };

  return (
    <Card sx={{
      maxWidth: 345,
      margin: 2,
    }}
    >
      <CardActionArea
        onClick={handleClick}
      >
        <CardMedia
          component="img"
          height="140"
          image={artist.thumbnailImg}
          alt="thumbnail of Artist"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" color="text.secondary">
            {artist.name}
          </Typography>
          <Typography variant="subtitle2" color="text.primary">
            {artist.gender}, {artist.orientation}
          </Typography>
          <Typography variant="h6" color="text.primary">
            {artist.shopName}, {artist.city}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
// <CardStyle>
//   <CardStyle className="card">
//     <img
//       src={artist.thumbnailImg}
//       className="card-img-top"
//       alt="thumbnail of Artist"
//       height="250"
//       // width=""
//     />
//     <div className="card-style card-body">
//       <h2 className="card-title">{artist.name}</h2>
//       <h4 className="card-text">{artist.city}</h4>
//       <h6>{artist.gender}</h6>
//       <h6>{artist.orientation}</h6>
//       <h6>Hourly Rate: ${artist.hourlyRt}</h6>
//       <h6>Average Availability: {artist.availability}</h6>
//       <h6>Shop: {artist.shopName}</h6>
//     </div>
//     <CardButtonContainer>
//       {user?.isAdmin ? (
//         <>
//           <DetailsButton
//             firebaseKey={artist.firebaseKey}
//             singleArtist={artist}
//           />
//           <EditButton firebaseKey={artist.firebaseKey} />
//           <DeleteButton
//             firebaseKey={artist.firebaseKey}
//             setAllArtist={setAllArtists}
//           />
//         </>
//       ) : (
//         <>
//           <DetailsButton
//             firebaseKey={artist.firebaseKey}
//             singleArtist={artist}
//           />
//         </>
//       )}
//       {user ? (
//         <FavoriteCheck favArtist={favArtist} artist={artist} user={user} />
//       ) : (
//         <></>
//       )}

//     </CardButtonContainer>
//   </CardStyle>
// </CardStyle>
//   );
// }

ArtistCard.propTypes = {
  // user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  // setFavArtists: PropTypes.func.isRequired,
  // favArtist: PropTypes.shape({
  // firebaseKey: PropTypes.string.isRequired,
  // favorited: PropTypes.bool,
  // uid: PropTypes.string,
  // artistId: PropTypes.string,
  // }),
  // setAllArtists: PropTypes.func.isRequired,
  artist: PropTypes.shape({
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
    city: PropTypes.string,
    gender: PropTypes.string,
    orientation: PropTypes.string,
    hourlyRt: PropTypes.string,
    instagram: PropTypes.string,
    availability: PropTypes.string,
    shopName: PropTypes.string,
    portfolioUrl: PropTypes.string,
    thumbnailImg: PropTypes.string,
  }).isRequired,
};

// ArtistCard.defaultProps = {
//   favArtist: {},
//   user: null,
// };
