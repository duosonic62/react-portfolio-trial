import React, { useEffect } from 'react';

import { aboutContents } from '../../assets/AboutContents/aboutContents';

import classes from './About.module.css';
import hoge from '../../assets/HomeContents/images/hoge.JPG';

const about = props => {
    useEffect(() => {
        // use async method
        console.log('[about] component did mout.');

    }, []);

    return (
        <div className={classes.About}>
            {
                aboutContents ?
                    <React.Fragment>
                        <h2>{aboutContents.name}</h2>
                        <img src={hoge} />
                        <p>{aboutContents.description}</p>
                    </React.Fragment>
                    : null
            }
        </div>
    );
};

export default about;