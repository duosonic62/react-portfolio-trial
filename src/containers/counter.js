import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
// import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';
import {} from '@material-ui/icons';

import * as actions from '../store/actions/index';

const counter = (props) => {
    return (
        <div>
            <p>count: {props.count}</p>
            <Button color="primary" onClick={props.onAddCounter}>Add</Button>
            {/* <Fab color="primary" aria-label="Add" className={classes.fab} onClick={props.onAddCounter}>
                <AddIcon />
            </Fab> */}
            <Button color="secondary" onClick={props.onSubCounter}>Sub</Button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        count: state.counter.count
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddCounter: () => dispatch(actions.addCounter()),
        onSubCounter: () => dispatch(actions.subCounter())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(counter);
