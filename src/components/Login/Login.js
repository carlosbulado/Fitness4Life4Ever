import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { AppToken } from '../../utils/AppToken';

import './Login.css';

async function loginUser(credentials) {
  console.log(credentials);
  // return fetch('http://localhost:3000/login', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(credentials)
  // })
  //   .then(data => data.json())
  credentials.token = "userToken";
  return credentials;
 }

const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({ username, password });
    AppToken.setToken(token);
    window.location.href = '/';
  }

  return (
    <Container>
      <Typography variant="h2" align="center" mt={10}>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} align="center" mt={5} mb={5}>
          <Grid item xs={12}>
            <TextField id="login" type="text" label="Login" variant="outlined" onChange={(e) => (setUserName(e.target.value))} className="login-page-input" />
          </Grid>
          <Grid item xs={12}>
            <TextField id="password" type="password" label="Password" variant="outlined" onChange={(e) => (setPassword(e.target.value))} className="login-page-input" />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}

export default Login