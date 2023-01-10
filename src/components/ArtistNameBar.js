import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import Stack from '@mui/material/Stack';

export default function ArtistNameBar({ singleArtist }) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>

        <AppBar
          position="static"
          color="transparent"
          elevation="0"
          sx={{ margin: 'auto' }}
        >
          <Stack
            direction="row"
          >
            <Avatar
              sx={{
                width: 86,
                height: 86,
                marginLeft: 5,
                border: 2,
                borderColor: '#e23976',
              }}
              alt={singleArtist.name}
              src={singleArtist.thumbnailImg}
            />
            <Container>
              <Typography
                variant="h4"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: '#e23976',
                  align: 'left',
                  textDecoration: 'none',
                }}
              >
                {singleArtist.name}
              </Typography>
              <Typography>
                ({singleArtist.pronouns})
              </Typography>
              <Stack direction="row">
                <IconButton
                  size="small"
                  aria-label="instagram"
                  href={singleArtist.instagram}
                  color="inherit"
                  sx={{ padding: 0 }}
                >
                  <InstagramIcon
                    sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
                  />
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="twitter"
                  disabled
                  color="inherit"
                  sx={{ padding: 1 }}
                >
                  <TwitterIcon
                    sx={{
                      display: { xs: 'flex', md: 'none' },
                      mr: 1,
                      margin: 0,
                      padding: 0,
                    }}
                  />
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="website"
                  href={singleArtist.instagram}
                  color="inherit"
                  sx={{ padding: 0 }}
                >
                  <LanguageIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                </IconButton>
              </Stack>
            </Container>

          </Stack>

        </AppBar>
      </Box>

      {/* <AppBar
        position="static"
        color="transparent"
        elevation="0"
      >
        <Container
          maxWidth="xl"
          disableGutters="true"
        >
          <Toolbar
            disableGutters
            variant="dense"
          >
            <Avatar alt={singleArtist.name} src={singleArtist.thumbnailImg} />
            <Box>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <Stack>

                  <Typography
                    variant="h1"
                    noWrap
                    component="a"
                    sx={{
                      mr: 2,
                      display: { xs: 'none', md: 'flex' },

                      fontWeight: 700,
                      letterSpacing: '.3rem',
                      textDecoration: 'none',
                      color: '#e23976',
                      align: 'left',
                    }}
                  >
                    {singleArtist.name}
                  </Typography>

                </Stack>
              </Box>
            </Box>

            <Typography
              variant="h4"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#e23976',
                align: 'left',
                textDecoration: 'none',
              }}
            >
              {singleArtist.name}
            </Typography>
            <Stack direction="row">
              <IconButton
                size="small"
                aria-label="instagram"
                href={singleArtist.instagram}
                color="inherit"
              >
                <InstagramIcon
                  sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
                />
              </IconButton>
              <IconButton
                size="large"
                aria-label="twitter"
                disabled
                color="inherit"
              >
                <TwitterIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              </IconButton>
              <IconButton
                size="large"
                aria-label="website"
                href={singleArtist.instagram}
                color="inherit"
              >
                <LanguageIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar> */}
    </>
  );
}
ArtistNameBar.propTypes = {
  singleArtist: PropTypes.shape({
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
    city: PropTypes.string,
    gender: PropTypes.string,
    pronouns: PropTypes.string,
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
