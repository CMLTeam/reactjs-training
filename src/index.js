import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import App from "./App";
import {createStore} from "redux";
import reducer from "./redux/reducer";
import {Provider} from "react-redux";
import {createPerson} from "./People";

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,

    document.getElementById('root'));

registerServiceWorker();
