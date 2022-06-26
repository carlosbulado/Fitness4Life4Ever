import React, { useState } from 'react'
import { Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material';

import Login from './components/Login/Login';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';

import './App.css';
import { AppToken } from './utils/AppToken';

function App() {
  const token = AppToken.getToken();

  if(!token) {
    return <Login />
  }

  return (
    <Box width="400px" sx={{width: {xl: '1488px'}}} m="auto">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
    </Box>
  )
}

export default App