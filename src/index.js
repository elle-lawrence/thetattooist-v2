import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import firebase from 'firebase/app';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import firebaseConfig from './api/apiKeys';
import Initialize from './Initialize';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

firebase.initializeApp(firebaseConfig);

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#e23976',
    },
    background: {
      default: '#1f1d1d',
      paper: 'linear-gradient(#7E7878 100%, #1F1D1D 100%)',
    },
    text: {
      disabled: '#e5e5e5',
      primary: '#ffffff',
      secondary: '#e23976',
      hint: '#1f1d1d',
    },
    error: {
      main: '#ea3e41',
    },
    success: {
      main: '#e5e5e5',
    },
  },
  typography: {
    h1: {
      fontSize: '4rem',
      fontFamily: 'Nunito',
      fontWeight: 300,
    },
    h2: {
      fontFamily: 'Nunito',
      fontSize: '3.6rem',
    },
    h3: {
      fontFamily: 'Nunito',
    },
    h5: {
      fontFamily: 'Nunito',
    },
    h6: {
      fontFamily: 'Nunito',
    },
    h4: {
      fontFamily: 'Nunito',
    },
    subtitle1: {
      fontFamily: 'Nunito',
    },
    subtitle2: {
      fontFamily: 'Nunito',
    },
    body2: {
      fontFamily: 'Nunito',
    },
    body1: {
      fontFamily: 'Nunito',
    },
    button: {
      fontFamily: 'Nunito',
    },
    caption: {
      fontFamily: 'Nunito',
    },
    overline: {
      fontFamily: 'Nunito',
    },
  },
  shape: {
    borderRadius: 10,
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        background: 'linear-gradient(#7E7878 100%, #1F1D1D 100%)',
        color: '#fff',
      },
    },
    MuiButton: {
      root: {
        background: 'linear-gradient(#E5E5E5 10%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      },
    },
    MuiSwitch: {
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: 8,
      },
      switchBase: {
        padding: 1,
        '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
          transform: 'translateX(16px)',
          color: '#fff',
          '& + $track': {
            opacity: 1,
            border: 'none',
          },
        },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 13,
        border: '1px solid #bdbdbd',
        backgroundColor: '#fafafa',
        opacity: 1,
        transition:
            'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      },
    },
  },
  props: {
    MuiAppBar: {
      color: 'transparent',
    },
  },
});

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Initialize />
      </ThemeProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
