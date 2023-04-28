import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Button } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import { List, ListItem } from '@mui/material';
import Event from '../../components/Event/Event';

//Copied from MUI's "App bar with a primary search field tutorial"
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

//Copied from MUI's "App bar with a primary search field tutorial"
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

//Copied from MUI's "App bar with a primary search field tutorial"
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

//Apply styling to Event card component
const StyledEvent = styled(Event)({
    //Style the event cards here
    
})

function OrganizersPage() {
    return (
        <>
            <Box sx={{ display: 'grid', justifyContent: 'center', flexGrow: 1 }}>
                <AppBar sx={{ position: 'static' }}>
                    <Toolbar>
                        <Button>
                            <Typography>FLEXI-EVENTS</Typography>
                        </Button>
                        <Button>Dashboard</Button>
                        <Button>Schedule</Button>
                        <Button>Links</Button>
                        <Button>Settings</Button>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Toolbar>
                </AppBar>
                <Divider />
                <Box sx={{display:'flex'}}>
                    <StyledEvent />
                    <StyledEvent />
                    <StyledEvent />
                    <StyledEvent />
                </Box>
                <Divider />
            </Box>
        </>
    )
}

export default OrganizersPage;