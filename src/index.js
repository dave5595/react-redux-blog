import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise';
import PostsNew from './components/posts_new';

import App from './components/app';
import reducers from './reducers';
import PostsIndex from "./components/posts_index";
import PostShow from "./components/post_show";
import PostEdit from "./components/post_edit";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/posts/new" component={PostsNew}/>
                    <Route path="/posts/edit/:id" component={PostEdit}/>
                    <Route path="/posts/:id" component={PostShow}/>
                    <Route exact path="/" component={PostsIndex}/>
                </Switch>
            </div>
        </BrowserRouter>

    </Provider>
    , document.querySelector('.container'));
