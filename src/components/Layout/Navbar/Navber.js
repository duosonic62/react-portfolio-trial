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
                        Counter
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default navber;