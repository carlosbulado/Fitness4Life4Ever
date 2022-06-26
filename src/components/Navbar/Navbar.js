import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../../assets/images/Logo.png';
import './Navbar.css';
import NavbarLoggedLinks from './NavbarLoggedLinks';
import { AppToken } from '../../utils/AppToken';

const Navbar = () => {
  return (
    <Stack
        direction="row"
        justifyContent="space-around"
        sx={{gap: {sm: '122px', xs: '40px'}, mt: {sm: '32px', xs: '20px'}, justifyContent: 'none'}}
        px="20px"
    >
        <Link 
            to="/" 
            alt="Logo"
            style={{
                width: '48px', height: '48px', margin: '0 20px'
            }}
        >
            <img src={Logo} />
        </Link>
        <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
            <Link to="/" style={{borderBottom: '3px solid #FF2625'}}>Home</Link>
        </Stack>
        <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
            {AppToken.getToken() ? <NavbarLoggedLinks /> : ''}
        </Stack>
    </Stack>
  )
}

export default Navbar