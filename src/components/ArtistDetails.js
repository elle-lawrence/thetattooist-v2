import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ArtistNameBar from './ArtistNameBar';

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 30px;
  padding-left: 10vw;
  padding-right: 10vw;
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

export default function ArtistDetails({ singleArtist }) {
  return (
    <>
      <DetailsContainer>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" />
          </div>
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
          <h3>{singleArtist.name}</h3>
          <a className="clickLink" href={singleArtist.shopUrl}>{singleArtist.shopName}</a>
          <h5>{singleArtist.city}</h5>
          <h5>{singleArtist.gender}</h5>
          <h5>{singleArtist.orientation}</h5>
          <h5>${singleArtist.hourlyRt}</h5>
          <a className="clickLink" href={singleArtist.instagram}>instagram</a><br />
          <a className="clickLink" href={singleArtist.portfolioUrl}>portfolio</a>
          <h5>{singleArtist.availability}</h5>
        </div>

      </DetailsContainer>
    </>
  );
}

ArtistDetails.propTypes = {
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
