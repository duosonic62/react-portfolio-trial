import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Link from '@material-ui/core/Link';

import { contentsList } from '../../../../assets/ContentsList/contentsList';

const toolbar = () => {

    const [sideDrawer, setSideDrwar] = useState(false);

    const sideList = (
        <div>
            <List>
                {
                    Object.keys(contentsList).map(content => (
                        <Link component={NavLink} to={contentsList[content].path} exact={true} color="inherit" key={content}>
                            <ListItem button>
                                <ListItemText primary={contentsList[content].name} />
                            </ListItem>
                        </Link>
                    ))
                }
            </List>

        </div>
    );

    const toggleDrawer = (open) => () => {
        setSideDrwar(open);
    };

    return (
        <React.Fragment>
            <IconButton color="inherit" aria-label="Menu" onClick={toggleDrawer(true)} >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
                Photos
            </Typography>
            <Drawer open={sideDrawer} onClose={toggleDrawer(false)}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    {sideList}
                </div>
            </Drawer>
        </React.Fragment>
    );
};

export default toolbar;