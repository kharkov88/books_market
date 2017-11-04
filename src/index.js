import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddlware from 'redux-saga';
import {BrowserRouter as Router,Link,Route} from "react-router-dom";
import 'regenerator-runtime/runtime'
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './components/App';
import reducer from './reducers';
import {rootSaga} from "./saga";

const logger = createLogger();
const saga = createSagaMiddlware();
const store = createStore(
    reducer,
    applyMiddleware(logger,saga)
)
window.localStorage.store = JSON.stringify(store)
saga.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App}/>
        </Router>
    </Provider>,
     document.getElementById('root')
    );

registerServiceWorker()

window.addEventListener("beforeunload",(event)=>{
    localStorage.reload = JSON.stringify(store.getState())
})