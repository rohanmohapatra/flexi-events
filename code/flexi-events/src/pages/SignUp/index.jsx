import React from 'react';
import { Box, Grid } from '@mui/material';
import {Typography} from '@mui/material';
import { Button } from '@mui/material';


// testing signup page

function SignUpPage() {

    return (


 <Box sx={{ m:'4vw 4vw 0vw 4vw', p: '5vw', bgcolor: '#000000', borderRadius: '6px', position: 'absolute', boxShadow:'10' }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12}>
                    <Typography variant='h4' sx={{ display: 'flex', justifyContent: 'center', color: '#FFFFFF' }}>FLEXI-EVENTS</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ display: 'flex', justifyContent: 'center', color: '#808081' }}>A platform for virtual events</Typography>
                </Grid>
              
                <Grid item xs={12}>
                    <Box sx={{display: 'grid', justifyContent: 'center', rowGap: '2vw', columnGap:'2vw'}}>
                        <Button variant='contained'>Login with Google</Button>
                        <Button variant='contained'>Login with Apple ID</Button>
                        <Button variant='contained'>Login with Flexi-Events</Button>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ display: 'flex', justifyContent: 'center', color: '#808081' }}>Or sign up by Filling the Following</Typography>
                </Grid>
               
            </Grid>
        </Box> 
    
    )
    }

export default SignUpPage;