/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleArtist } from '../api/data/artists';

export default function ArtistImageList() {
  const [artist, setArtist] = useState({});
  const { key } = useParams();

  useEffect(() => {
    let isMounted = true;
    getSingleArtist(key).then((singleArtist) => {
      if (isMounted) setArtist(singleArtist);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
  // <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
  //   <ImageListItem key={key}>
  //     <img
  //       src={`${artist.img1}?w=161&fit=crop&auto=format`}
  //       srcSet={`${artist.img1}?w=161&fit=crop&auto=format&dpr=2 2x`}
  //       alt={artist.name}
  //       loading="lazy"
  //     />
  //     <img
  //       src={`${artist.img2}?w=161&fit=crop&auto=format`}
  //       srcSet={`${artist.img2}?w=161&fit=crop&auto=format&dpr=2 2x`}
  //       alt={artist.name}
  //       loading="lazy"
  //     />
  //     <img
  //       src={`${artist.img3}?w=161&fit=crop&auto=format`}
  //       srcSet={`${artist.img3}?w=161&fit=crop&auto=format&dpr=2 2x`}
  //       alt={artist.name}
  //       loading="lazy"
  //     />
  //     <img
  //       src={`${artist.img1}?w=161&fit=crop&auto=format`}
  //       srcSet={`${artist.img1}?w=161&fit=crop&auto=format&dpr=2 2x`}
  //       alt={artist.name}
  //       loading="lazy"
  //     />
  //   </ImageListItem>
  // </ImageList>
    <Box sx={{ width: 420, height: 400, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={2} gap={0}>
        <ImageListItem key={key}>
          <img
            src={`${artist.img1}?w=208&fit=crop&auto=format`}
            srcSet={`${artist.img1}?w=208&fit=crop&auto=format&dpr=2 2x`}
            alt={artist.name}
            loading="lazy"

          />
        </ImageListItem>
        <ImageListItem
          // key={key}
          sx={{ margin: 2 }}
        >
          <img
            src={`${artist.img2}?w=248&fit=crop&auto=format`}
            srcSet={`${artist.img2}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={artist.name}
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={`${artist.img3}?w=248&fit=crop&auto=format`}
            srcSet={`${artist.img3}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={artist.name}
            loading="lazy"
          />
        </ImageListItem>
        <img
          src={`${artist.img3}?w=248&fit=crop&auto=format`}
          srcSet={`${artist.img3}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={artist.name}
          loading="lazy"
        />
        <img
          src={`${artist.img3}?w=248&fit=crop&auto=format`}
          srcSet={`${artist.img3}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={artist.name}
          loading="lazy"
        />
        <img
          src={`${artist.img3}?w=248&fit=crop&auto=format`}
          srcSet={`${artist.img3}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={artist.name}
          loading="lazy"
        />

      </ImageList>
    </Box>
  );
}
