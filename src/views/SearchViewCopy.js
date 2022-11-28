import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import SearchBar from '../components/SearchBar';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
// import Switch from '@mui/material/Switch';
// import StarBorder from '@mui/icons-material/StarBorder';
import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
import { CardContainerStyling, GroupButtonStyling } from './ShowAllArtists';
import RadioGender from '../components/RadioGender';
import SearchButtonGroup from '../components/buttons/SearchButtonGroup';
import ArtistCard from '../components/ArtistCard';
import { getAllArtists } from '../api/data/artists';

export default function SearchView({ user }) {
  const [allArtists, setAllArtists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedArtists, setSearchedArtists] = useState([]);
  const [shownArtists, setShownArtists] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredArtists, setFilteredArtists] = useState([]);
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

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

  useEffect(() => {
    const searchResults = allArtists.filter((artist) => artist.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchedArtists(searchResults);
  }, [searchTerm]);

  const resetSearchTerm = () => {
    setSearchTerm('');
    setSearchedArtists(allArtists);
  };

  // Handle Filtering
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
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={(
          <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
          </ListSubheader>
      )}
      >
        <ListItemButton>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {[0, 1, 2, 3].map((value) => {
              const labelId = `checkbox-list-label-${value}`;

              return (
                <ListItem
                  key={value}
            // secondaryAction={
            //   <IconButton edge="end" aria-label="comments">
            //     <CommentIcon />
            //   </IconButton>
            // }
                  // disablePadding
                >
                  <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Collapse>
      </List>
      <div>
        <GroupButtonStyling>
          <SearchButtonGroup user={user} />
        </GroupButtonStyling>
        {/* <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} /> */}
        <RadioGender
          setFilter={setFilter}
          filter={filter}
          resetFilter={resetFilter}
        />
      </div>
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
