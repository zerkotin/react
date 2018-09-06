import React from 'react';
import {Route, Switch, withRouter, Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {Icon} from './components/components.jsx';

import '../style/app-view.less';

//TODO add example for redux
//TODO use lodash
/**
JSDOC example
AppView is the main view class for the application
*/
class AppView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {path: null};
  }

  componentDidMount() {
    this.setState({path: this.props.location.pathname});
    this.props.history.listen(location => this.setState({path: location.pathname}));
  }

  render() {
    return (
      <div className="app-view">
        <HeaderView path={this.state.path}/>
        <div className="center-view">
          <NavigationView />
          <div id="main-view" className="main-view">
            <Switch>
              <Route exact path="/" component={HomeView}/>
              <Route path="/about" component={AboutView}/>
            </Switch>
          </div>
        </div>
        <FooterView />
      </div>
    );
  }
}

function HomeView() {
  return <div>Home View</div>;
}

function AboutView() {
  return <div>About View</div>;
}

function NavigationView() {
  const items = [
    <Link key="home" to="/"><Icon name="home"/>Home</Link>,
    <Link key="about" to="/about"><Icon name="info"/>About</Link>
  ];
  return <div className="navigation-view">{items}</div>;
}

function HeaderView({path}) {
  return <div className="header-view"><Icon name="settings"/>Path: {path}</div>;
}

HeaderView.propTypes = {path: PropTypes.string};

function FooterView() {
  return <div className="footer-view">Footer<Icon name="copyright"/></div>;
}

export default withRouter(AppView);
