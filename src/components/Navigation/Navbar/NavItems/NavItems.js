import React from 'react';
import { NavLink } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import { contentsList } from '../../../../assets/ContentsList/contentsList';

const NavItems = () => {
    return (
        <React.Fragment>
            {Object.keys(contentsList).map(content => (
                <Link component={NavLink} to={contentsList[content].path} exact={true} color="inherit" key={content}>
                    <Typography variant="h6" color="inherit">
                        {contentsList[content].name}
                    </Typography>
                </Link>
            ))}
        </React.Fragment>
    );
};

export default NavItems;