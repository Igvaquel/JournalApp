/* eslint-disable no-extra-boolean-cast */
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink  } from 'react-router-dom'

import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google  } from '@mui/icons-material'

import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth'
import { useMemo } from "react"


export const LoginPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth );

  const dispatch = useDispatch()


  const { email, password, onInputChange } = useForm({
    email: 'asdasd@gmail.com',
    password: 'contraseña123'
  });

  const isAuthenticating = useMemo( () => status === 'checking', [status])

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch( startLoginWithEmailPassword( {email, password }) )
    
  }

  const onGoogleSubmit = () => {
    console.log('onGoogleSubmit');
    dispatch( startGoogleSignIn () )

  }


  return (
    <>
      <AuthLayout title='Login'>

        <form 
          onSubmit={ onSubmit }
          className="animate__animated animate_fadeIn animate__faster"
        >

          <Grid container>

            {/* Email */}
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Email" 
                type='email' 
                placeholder="Enter your email"
                fullWidth
                name='email'
                value={ email }
                onChange={ onInputChange }
              />
            </Grid>

            {/* Password */}
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Password" 
                type='password' 
                placeholder="*****************"
                fullWidth
                name='password'
                value={ password }
                onChange={ onInputChange }
              />
            </Grid>

            {/* Login button / Google button */}
            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>

              <Grid 
                item 
                xs={ 12 } 
                display={ !!errorMessage ? '' : 'none'}
              >
                <Alert severity="error">
                  {errorMessage}
                </Alert>
              </Grid>


              <Grid item xs={ 12 } sm={ 6 }>
                <Button 
                  type='submit' 
                  variant='contained' 
                  fullWidth 
                  disabled = { isAuthenticating }
                >
                  Login
                </Button> 
              </Grid>

              <Grid item xs={ 12 } sm={ 6 }>
                <Button 
                  variant='contained' 
                  fullWidth 
                  onClick={ onGoogleSubmit }
                  disabled = { isAuthenticating }
                >
                  <Google>
                    <Typography sx={{ ml: 1 }}>Google</Typography>
                  </Google>
                </Button> 
              </Grid>

            </Grid>
            
            {/* Register page button */}
            <Grid container direction="row" justifyContent='end'>
              <Link component={ RouterLink } color='inherit' to='/auth/register'>
                Create an account
              </Link>
            </Grid>

          </Grid>

        </form>

      </AuthLayout>

    </>

          

  )
}
