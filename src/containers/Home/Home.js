import React from 'react';

import Slider from 'react-slick';

import { homeContents } from '../../assets/HomeContents/homeContents';

import classes from './Home.module.css';

import huga from '../../assets/HomeContents/images/huga.JPG';

const home = () => {
    const contents = (
        Object.keys(homeContents).map(content => (
            <div key={content} className={classes.content}>
                <img src={huga} className={classes.img} />
            </div>
        ))
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className={classes.Home}>
            <Slider {...settings} >
                {contents}
            </Slider>
        </div>
    );
};

export default home;