import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export default function EditButton({ firebase }) {
  return (
    <>
      {/* <IconButton
        aria-label="edit"
        color="secondary"
        LinkComponent={`/edit/${firebase}`}

      >
        <EditIcon />
      </IconButton> */}
      <Link to={`/edit/${firebase}`} className="btn-outline-light btn">
        <EditIcon />
      </Link>

    </>
  );
}

EditButton.propTypes = {
  firebase: PropTypes.string,
};

EditButton.defaultProps = {
  firebase: '',
};
