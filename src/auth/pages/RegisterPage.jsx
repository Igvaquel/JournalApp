import { Button, Grid, TextField, Typography } from "@mui/material"
import { Link as RouterLink  } from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout"
import { Link } from "react-router-dom"

export const RegisterPage = () => {
  return (
    <>
      <AuthLayout title="Register">

        <form>

          <Grid container>  

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField
                label="Full name" 
                type='text' 
                placeholder="Enter your full name"
                fullWidth
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField
                label="Email" 
                type='email' 
                placeholder="Enter your email"
                fullWidth
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Password" 
                type='password' 
                placeholder="*****************"
                fullWidth
              />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>

              <Grid item xs={ 12 } >
                <Button variant='contained' fullWidth>
                  create account
                </Button> 
            </Grid>

            </Grid>

            <Grid container direction="row" justifyContent='end'>
              
              <Typography sx={{ mr: 1 }}> Already have an account? </Typography>

              <Link component={ RouterLink } color='inherit' to='/auth/login'>
                Log In
              </Link>
            </Grid>

          </Grid>

        </form>

      </AuthLayout>
    </>
  )
}
