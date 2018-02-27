import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import PersonList, {createPerson} from "./Hello";

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(

    <PersonList/>,

    document.getElementById('root'));

registerServiceWorker();
