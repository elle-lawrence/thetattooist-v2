import React from 'react';
// import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

export default function FindYourArtistBtn() {
  return (
    // <Link to="/searchgender" className="btn-style btn-outline-dark btn">
    //   <SearchIcon color="secondary" /> find your artist
    // </Link>
    <Button
      variant="contained"
      size="small"
      sx={{
        p: 1,
        borderRadius: 10,
        py: 1,
      }}
      href="/searchgender"
      startIcon={<SearchIcon color="secondary" />}
    >
      find your artist
    </Button>
  );
}
