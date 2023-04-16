import React from 'react';
import { Box, Grid, TextField, Typography, Button} from '@mui/material';
import FormControlLabel from "@mui/material/FormControlLabel";
import { Paper } from '@mui/material';
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';



function SignUpPage() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get("email"),
          password: data.get("password"),
        });
    };
    return (


 <Box sx={{ m:'4vw 4vw 0vw 4vw', p: '5vw', bgcolor: '#000000', borderRadius: '6px', boxShadow:'10' }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12}>
                    <Typography variant='h4' sx={{ display: 'flex', justifyContent: 'center', color: '#FFFFFF' }}>FLEXI-EVENTS</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ display: 'flex', justifyContent: 'center', color: '#808081' }}>A platform for virtual events</Typography>
                </Grid>
              
                <Grid item xs={12}>
                    <Box sx={{display: 'grid', justifyContent: 'center', rowGap: '1vw', columnGap:'2vw'}}>
                        <Button variant='contained' sx={{fontSize:15, width: 400,m: 1, p: 2}}>Login with Google</Button>
                        <Button variant='contained' sx={{fontSize:15, width: 400,m: 1, p: 2}}>Login with Apple ID</Button>
                        <Button variant='contained' sx={{fontSize:15, width: 400,m: 1, p: 2}}>Login with Flexi-Events</Button>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ display: 'flex', justifyContent: 'center', color: '#808081' }}>Or sign up by Filling the Following</Typography>
                </Grid>
            </Grid>

            <Container component="main" maxWidth="xs">
    
                    <Box
                    sx={{
                        marginTop: 5,
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                        bgcolor: '#FFFFFF',
                        padding: 2,
                    
                    }}
                    >
                    
                    <Typography component="h1" variant="h6">
                        SIGN UP
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="default" />}
                                label="By signing up, I agree to the following"
                                />
                                
                                
                            </Grid>
                       
                        </Grid>

                       
                        
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        >
                        Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                    </Box>
                
            </Container>
            
            </Box>
        
            )

            
        
    }
    
    

 
{/* 
 <Box sx={{display: 'grid', alignItems: 'center' ,margin: 'auto' ,color: 'white'}}> 
                            <Typography variant='h2' padding={3} textAlign='center'>  
                                <TextField type={'text'} variant='outlined' placeholder='Name' />
                                <TextField type={'email'} variant='outlined' placeholder='Email'/>
                                <TextField type={'password'} variant='outlined' placeholder='Password'/>
                                <Button variant='contained'>Sign Up as an Atendee</Button>
                          </Typography>
                         </Box>  */}




export default SignUpPage;