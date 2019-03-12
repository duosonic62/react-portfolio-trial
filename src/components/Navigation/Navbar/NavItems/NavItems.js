import React from 'react';
import { NavLink } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const NavItems = () => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
};

export default NavItems;