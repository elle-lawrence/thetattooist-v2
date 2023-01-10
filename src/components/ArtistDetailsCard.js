import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import EditArtistBar from './EditArtistBar';
import ArtistNameBar from './ArtistNameBar';
// import ArtistPicCarousel from './ArtistPicCarousel';
// import ArtistImageList from './ArtistImageList';

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 30px;
  // padding-left: 4vw;
  // padding-right: 4vw;
  align-items: center;

  .infoDiv {
    color: white;
    font-family: 'Nunito', sans-serif;
    text-align: center;
  }
  .clickLink {
    color: white;
    font-family: 'Nunito', sans-serif;
    text-decoration: none;
    font-size: 20px;
  }

`;

export default function ArtistDetailsCard({ singleArtist, user }) {
  function createData(title, data) {
    return {
      title, data,
    };
  }

  const rows = [
    createData('location:', `${singleArtist.city}, ${singleArtist.state}`),
    createData('gender:', `${singleArtist.gender}`),
    createData('sexuality:', `${singleArtist.sexuality}`),
    createData('shop:', `${singleArtist.shopName}`),
    createData('how to book:', `${singleArtist.howToBook}`),
    createData('hrly:', `${singleArtist.hourlyRt}`),
    createData('yrs exp:', `${singleArtist.yrsExp}`),
    createData('exp w/ melanin skin:', `${singleArtist.expMelaninSkin}`),
  ];

  return (
    <>
      <DetailsContainer>
        {/* <ArtistImageList singleArtist={singleArtist} /> */}
        {/* <ArtistPicCarousel singleArtist={singleArtist} /> */}
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
          {/* <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" />
          </div> */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={singleArtist.img1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={singleArtist.img2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={singleArtist.img3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <ArtistNameBar singleArtist={singleArtist} />
        <div className="infoDiv">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 400 }} aria-label="simple table">
              {/* <TableHead>
                <TableRow>
                  <TableCell>About Me</TableCell>
                  <TableCell align="right" />
                </TableRow>
              </TableHead> */}
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.title}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.title}
                    </TableCell>
                    <TableCell align="right">{row.data}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <Typography>
          {singleArtist.bio}
        </Typography>
        <div>
          {user?.isAdmin ? (
            <>
              <EditArtistBar
                singleArtist={singleArtist}
              />
            </>
          ) : (
            <>
              Not admin
            </>
          )}
        </div>
      </DetailsContainer>
    </>
  );
}

ArtistDetailsCard.propTypes = {
  singleArtist: PropTypes.shape({
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
    city: PropTypes.string,
    gender: PropTypes.string,
    sexuality: PropTypes.string,
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
    bio: PropTypes.string,
    expMelaninSkin: PropTypes.bool,
    state: PropTypes.string,
    yrsExp: PropTypes.number,
    howToBook: PropTypes.string,
  }).isRequired,
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),

};

ArtistDetailsCard.defaultProps = {
  user: null,
};
