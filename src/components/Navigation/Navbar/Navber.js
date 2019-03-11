import React from 'react';
import { NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';

import classes from './Navber.module.css';

const navber = (props) => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense" className={classes.Navber}>
                    {/* <Tabs
                    value="0"
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"> */}
                    <Link component={NavLink} to="/" exact={true} color="inherit">
                        <Typography variant="h6" color="inherit">
                            Home
                        </Typography>
                    </Link>
                    <Link component={NavLink} to="/counter" exact={true} color="inherit">
                        <Typography variant="h6" color="inherit">
                            Portfolio
                        </Typography>
                    </Link>
                    <Typography variant="h6" color="inherit">
                        Works
                    </Typography>
                    <Typography variant="h6" color="inherit">
                        Contact
                    </Typography>
                    {/* <Link component={NavLink} to="/" exact={true}>
                        <Tab label="Home" />
                    </Link>
                    <Tab label="Home" />
                    <Tab label="Home" />
                    <Tab label="Home" /> */}
                    {/* </Tabs> */}
                </Toolbar>
            </AppBar>
        </div>
    );
};

// export default withStyles(styles, { withTheme: true })(navber);
export default navber;