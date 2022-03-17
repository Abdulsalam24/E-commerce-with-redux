import React  from 'react';
import ReactDOM from 'react-dom';
import './style.scss'
import App from './App';
import { store } from './redux/store';

import { Provider } from 'react-redux';

import 'font-awesome/css/font-awesome.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import '../node_modules/bootstrap/dist/js/bootstrap.bundle'


import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>,
document.getElementById('root'));