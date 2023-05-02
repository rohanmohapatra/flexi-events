import React from 'react';
import {Typography} from '@mui/material';
import { Box } from '@mui/material';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Button } from '@mui/material';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import Divider from '@mui/material/Divider';

//To store events
const events = [];

function Calendar(props) {

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
                    </Toolbar>
                </AppBar>
                <Divider />
                <Button>Import Calender</Button>
                
                
                {/*<Calendar 
                    events={events}
                    startAccesor="start"
                    endAccessor="end"
                    defaultView="month"
                />*/}
            </Box>
        </>
    )

}

export default Calendar;