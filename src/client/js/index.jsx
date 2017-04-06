import React from 'react';
import {render} from 'react-dom';

import AwesomeComponent from './AwesomeComponent.jsx';
import ClockComponent from './ClockComponent.jsx';

class App extends React.Component {
  render () {
      return (
        <div>
          <p> Hello React! look how awesome this is... </p>
          <AwesomeComponent />
          <ClockComponent />
        </div>
      );
  }
}

render(<App/>, document.getElementById('app'));
