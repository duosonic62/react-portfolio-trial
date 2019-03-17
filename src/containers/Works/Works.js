import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

import Divider from '@material-ui/core/Divider';
import classes from './Works.module.css';

const works = (props) => {
    useEffect(() => {
        props.onGetWorksContents();
    }, []);

    console.log(props);

    let worksList = null;
    if (props.worksContents) {
        worksList = Object.keys(props.worksContents).map(key => (
            <React.Fragment key={key}>
                <div>
                    <p><a href={props.worksContents[key].url}>{props.worksContents[key].title}</a></p>
                    <p>{props.worksContents[key].date} - {props.worksContents[key].publisher}</p>
                </div>
                <Divider />
            </React.Fragment>
        ));
    }

    return (
        <div className={classes.Works}>
            {worksList}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        worksContents: state.works.contents
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetWorksContents: () => dispatch(actions.getWroksContents())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(works);