import React, { useState } from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const navber = (props) => {

    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit">
                        Asahito Akagi
                    </Typography>
                    <Typography variant="h6" color="inherit">
                        Portfolio
                    </Typography>
                    <Typography variant="h6" color="inherit">
                        Works
                    </Typography>
                    <Typography variant="h6" color="inherit">
                        Contact
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default navber;