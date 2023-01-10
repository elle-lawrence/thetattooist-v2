/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Box from '@mui/material/Box';
import { getAllArtists } from '../api/data/artists';
import ArtistCard from '../components/ArtistCardCopyCopy';
// import SearchButtonGroup from '../components/buttons/SearchButtonGroup';
// import SearchBar from '../components/SearchBar';
// import RadioGender from '../components/RadioGender';
import { CardContainerStyling } from './ShowAllArtists';

// const newFilter = createFilterOptions();

export default function SearchView({ user }) {
  const [allArtists, setAllArtists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedArtists, setSearchedArtists] = useState([]);
  const [shownArtists, setShownArtists] = useState([]);
  const [filter, setFilter] = useState([]);
  const [filteredArtists, setFilteredArtists] = useState([]);
  //
  //
  //
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  const filterOptions = [
    { filterType: 'gender', label: 'male' },
    { filterType: 'gender', label: 'female' },
    { filterType: 'gender', label: 'non-binary' },
    { filterType: 'sexuality', label: 'queer' },
    { filterType: 'sexuality', label: 'straight' },
  ];

  //
  //
  //

  // Cache artists
  useEffect(() => {
    let isMounted = true;
    getAllArtists().then((artists) => {
      if (isMounted) setAllArtists(artists);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // Handle Searching
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const searchResults = allArtists.filter((artist) => artist.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchedArtists(searchResults);
  }, [searchTerm]);

  const resetSearchTerm = () => {
    setSearchTerm('');
    setSearchedArtists(allArtists);
  };

  // Handle Filtering
  // const selectFilter = (value) => {
  //   console.warn(value);
  //   if (value === 'female') {
  //     setFilter('female');
  //   } else if (value === 'male') {
  //     setFilter('male');
  //   } else if (value === 'nonbinary') {
  //     setFilter('nonbinary');
  //   } else if (value === 'straight') {
  //     setFilter('straight');
  //   } else if (value === 'queer') {
  //     setFilter('queer');
  //   }
  // };

  useEffect(() => {
    if (filter) {
      const filterResults = allArtists.filter((artist) => artist.gender === filter);
      setFilteredArtists(filterResults);
    }
  }, [filter]);

  const resetFilter = () => {
    setFilter('');
    setFilteredArtists(allArtists);
  };

  // Display Artists
  useEffect(() => {
    const parsedArtists = filteredArtists.filter((filteredArtist) => searchedArtists.some(
      (searchedArtist) => filteredArtist.firebaseKey === searchedArtist.firebaseKey,
    ));
    setShownArtists(parsedArtists);
  }, [filteredArtists, searchedArtists]);

  useEffect(() => {
    resetFilter();
    resetSearchTerm();
  }, [allArtists]);

  return (
    <>
      {/* **Search name */}
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: 400 },
        }}
        noValidate
        autoComplete="off"
      >

        <TextField
          label="search name"
          id="outlined-size-normal"
            // defaultValue="search name"
          size="normal"
          style={{ width: 400 }}
          margin="none"
          onChange={handleSearch}
          sx={{ marginLeft: 5 }}
        />

        {/* **Gender Filter */}
        <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={filterOptions}
          disableCloseOnSelect
          getOptionLabel={(option) => option.label}
          groupBy={(option) => option.filterType}
          renderOption={(props, option, { selected }) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.label}
            </li>
          )}
          style={{ width: 400 }}
          onChange={(event, value) => console.warn(value)}
          renderInput={(params) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
            <TextField {...params} label="filter" sx={{ marginLeft: 2 }} />
          )}
        />
      </Box>

      <CardContainerStyling>
        {shownArtists.map((artist) => (
          <ArtistCard
            key={artist.firebaseKey}
            artist={artist}
            setAllArtists={setAllArtists}
            user={user}
          />
        ))}
      </CardContainerStyling>

    </>
  );
}

SearchView.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

SearchView.defaultProps = {
  user: null,
};
