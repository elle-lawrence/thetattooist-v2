import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { VscDiffAdded } from 'react-icons/vsc';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
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
import SignInButton from '../components/buttons/SignInButton';
import SignOutButton from '../components/buttons/SignOutButton';
import { getUser } from '../api/data/userData';

export default function ProfileView({ user }) {
  const { firebaseKey } = useParams();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    console.warn(firebaseKey);
    // const userId = `${user.uid}`;
    getUser(firebaseKey).then(setUserInfo);
    console.warn(`this is userInfo: ${userInfo}`);
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
      <Card sx={{ maxWidth: 420 }}>
        <CardMedia
          component="img"
          height="340"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt={`${userInfo.name}`}
        />
        <CardContent>
          <Stack direction="row">
            <Avatar
              alt={`${userInfo.name}`}
              src="/static/images/avatar/1.jpg"
              sx={{ width: 56, height: 56 }}
            />
            <Typography variant="h5" component="div">
              {userInfo.name}
            </Typography>
            <Typography variant="subtitle1" align="right" color="text.secondary">
              {userInfo.pronouns}
            </Typography>
          </Stack>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 380 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>About Me:</TableCell>
                  <TableCell align="right" />
                </TableRow>
              </TableHead>
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
        <CardActions>
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>

      {user ? (
        <>
          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
      {user?.isAdmin ? (
        <>
          <Link className="linkStyling" to="/add">
            <VscDiffAdded />
          </Link>
        </>
      ) : (
        <></>)}
    </>
  );
}
ProfileView.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

ProfileView.defaultProps = {
  user: null,
};
