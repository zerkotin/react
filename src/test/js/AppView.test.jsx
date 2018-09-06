import React from 'react';
import renderer from 'react-test-renderer';
import {HashRouter, Route, Switch} from 'react-router-dom';

// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';

import AppView from '../../js/AppView.jsx';

test('AppView', () => {
  // localStorage.user = '{"username": "appview"}'; //localStorage user mock

  // var mock = new MockAdapter(axios);
  // mock.onGet('/users/name/appview').reply(200, {fullName: 'AppView Test'}); //mock user request

  const component = renderer.create(
	<HashRouter>
		<Switch>
			<Route path="/" component={AppView}/>
		</Switch>
	</HashRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
