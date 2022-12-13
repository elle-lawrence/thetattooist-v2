import React from 'react';
import { useHistory } from 'react-router-dom';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
// import { VscTrash } from 'react-icons/vsc';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteArtist } from '../../api/data/artists';

// const AdminButtonStyling = styled.button`
//   .btn-style {
//     border: none;
//     color: white;
//     font-family: 'Nunito', sans-serif;
//   }
// `;

export default function DeleteButton({ firebaseKey, setResetAllArtists }) {
  const history = useHistory();
  return (
    <>
      <IconButton
        aria-label="delete"
        color="secondary"
        onClick={() => {
          deleteArtist(firebaseKey).then((allArtists) => {
            setResetAllArtists(allArtists);
            history.push('/artists');
          });
        }}
      >
        <DeleteIcon />
      </IconButton>
      {/* <Button
        variant="outlined"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick={() => {
          deleteArtist(firebaseKey).then((allItems) => {
            setAllItems(allItems);
            history.push('/artists');
          });
        }}
      >
        Delete
      </Button> */}
      {/* <AdminButtonStyling
        type="button"
        className="btn-style btn-outline-dark btn"
        onClick={() => {
          deleteArtist(firebaseKey).then((allItems) => {
            setAllItems(allItems);
            history.push('/artists');
          });
        }}
      > */}
      {/* <VscTrash />
      </AdminButtonStyling> */}
    </>
  );
}

DeleteButton.propTypes = {
  firebaseKey: PropTypes.string,
  setResetAllArtists: PropTypes.func,
};

DeleteButton.defaultProps = {
  firebaseKey: '',
  setResetAllArtists: () => {},
};
