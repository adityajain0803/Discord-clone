import React from 'react'
import "./Navigation.css";
import HomeIcon from '@mui/icons-material/Home';
import DnsIcon from '@mui/icons-material/Dns';
import AddIcon from '@mui/icons-material/Add';
import NavigationIcon from '@mui/icons-material/Navigation';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
// import App from "./App";
// import { useState } from 'react';
// import Popup from './Popup';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@emotion/react';
// import { Dialog } from '@mui/material';

// function MyComponent() {
//   const theme = useTheme();
//   const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

//   return <Dialog fullScreen={fullScreen} />;
// }
function Navigationbar() {
    // const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className='navigationbar'>
        <HomeIcon />
        <DnsIcon />
        <AddIcon />
        <NavigationIcon />
        <DownloadForOfflineIcon />
    </div>
  );
}

export default Navigationbar;