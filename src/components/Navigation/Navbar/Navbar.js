import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import NavItems from './NavItems/NavItems';
import SideDrawer from './SideDrawer/SideDrawer';

import classes from './Navbar.module.css';

const navber = (props) => {
    return (
        <AppBar position="static" className={classes.Navber} >
            <Toolbar variant="dense" className={classes.NavberToolvar}>
                <div className={classes.DesktopOnly}>
                    <NavItems />
                </div>
                <div className={classes.MobileOnly}>
                    <SideDrawer />
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default navber;