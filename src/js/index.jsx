import 'normalize.css';
import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';

import AppView from './AppView.jsx';

import '../style/index.less';

render(
  <HashRouter>
    <Switch>
      <Route path="/" component={AppView}/>
    </Switch>
  </HashRouter>
  ,document.getElementById('app')
);
