import React from 'react';
import {render} from 'react-dom';

import AwesomeComponent from './AwesomeComponent.jsx';
import ClockComponent from './ClockComponent.jsx';

import css from '../style/index.scss';

class App extends React.Component {
  render () {
      return (
        <div className="main-container">
          <p className="some-text"> Hello React! look how awesome this is... </p>
          <AwesomeComponent />
          <ClockComponent />
        </div>
      );
  }
}

render(<App/>, document.getElementById('app'));
