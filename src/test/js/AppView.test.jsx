import React from 'react';
import renderer from 'react-test-renderer';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import AppView from '../../js/AppView.jsx';

test('AppView', () => {
  //localStorage.user = '{"username": "appview"}'; //localStorage user mock

  // var mock = new MockAdapter(axios);
  // mock.onGet('/users/name/appview').reply(200, {fullName: 'AppView Test'}); //mock user request

  const component = renderer.create(
    <AppView />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
