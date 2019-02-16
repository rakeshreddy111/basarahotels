import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Reserve from './components/Reserve';
import Hotels from './components/Hotels';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/Hotels" component={Hotels} />
            <Route path="/Reserve" component={Reserve} />
        </div>
    </BrowserRouter>)
    ,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
