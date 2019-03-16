import React from 'react';
import { worksContents } from '../../assets/WorksContents/worksContents';

import Divider from '@material-ui/core/Divider';

import classes from './Works.module.css';

const works = () => {
    const worksList = Object.keys(worksContents).map(key => (
        <React.Fragment>
            <div key={key}>
                <p><a href={worksContents[key].url}>{worksContents[key].title}</a></p>
                <p>{worksContents[key].date} - {worksContents[key].publisher}</p>
            </div>
            <Divider />
        </React.Fragment>
    ));

    return (
        <div className={classes.Works}>
            {worksList}
        </div>
    );
};

export default works;