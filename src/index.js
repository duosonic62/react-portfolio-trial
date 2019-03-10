import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
// if I apply middleware...
// import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// import thunk from 'redux-thunk';

import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import countReducer from './store/reducers/counter';

// if I apply middleware...
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    counter: countReducer
});

// if I apply middleware...
// const store = createStore(
//     rootReducer, composeEnhancers(
//         applyMiddleware(thunk)
//     )
// );
const store = createStore(
    rootReducer
);

// material-ui setting
const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily: [
            'Noto Sans',
            'sans-serif',
        ].join(','),
    },
});



ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
