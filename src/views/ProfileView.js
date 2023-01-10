import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Stack } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SignInButton from '../components/buttons/SignInButton';
import SignOutButton from '../components/buttons/SignOutButton';
import { getUser } from '../api/data/userData';

export default function ProfileView({ user }) {
  const { firebaseKey } = useParams();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    // const userId = `${user.uid}`;
    getUser(firebaseKey).then(setUserInfo);
    // let isMounted = true;
    // getUserInfo(user.uid).then((userObj) => {
    //   console.warn(userObj);

    //   if (isMounted) setUserInfo(userObj);
    // });
    // return () => {
    //   isMounted = false;
    // };
  }, []);

  function createData(title, data) {
    return {
      title, data,
    };
  }

  const rows = [
    createData('location', `${userInfo.city}, ${userInfo.state}`),
    createData('gender', `${userInfo.gender}`),
    createData('sexuality', `${userInfo.sexuality}`),
  ];
  return (
    <>
      <Card sx={{ maxWidth: 430 }}>
        <CardMedia
          component="img"
          height="430"
          image={`${userInfo.profileImg}`}
          alt={`${userInfo.name}`}
        />
        <CardContent>
          <Stack direction="row">
            <Avatar
              alt={`${userInfo.name}`}
              src="/static/images/avatar/1.jpg"
              sx={{ width: 76, height: 76, marginBottom: 5 }}
            />
            <Stack
              sx={{ marginLeft: 3 }}
            >
              <Typography variant="h4" component="div">
                {userInfo.name}
              </Typography>
              <Typography variant="subtitle1" align="left" color="text">
                ({userInfo.pronouns})
              </Typography>
            </Stack>
          </Stack>
          <TableContainer
            component={Paper}
          >
            <Table sx={{ minWidth: 380 }} aria-label="simple table">
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
        </CardContent>
        <CardActions />
      </Card>
      <Box
        sx={{ justifyContent: 'center', marginTop: 3 }}
      >
        {user ? (
          <>
            <SignOutButton />
            <Button size="small" variant="outlined"><ModeEditIcon />Edit</Button>
          </>
        ) : (
          <SignInButton />
        )}
        {user?.isAdmin ? (
          <>
            <Link
              component="button"
              variant="outlined"
              className="linkStyling"
              to="/add"
              sx={{ color: 'primary' }}
            >
              <AddCircleIcon />
            </Link>
          </>
        ) : (
          <></>)}
      </Box>

    </>
  );
}
ProfileView.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

ProfileView.defaultProps = {
  user: null,
};
