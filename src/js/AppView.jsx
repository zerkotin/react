import React from 'react';
import {Route, Switch, withRouter, Link} from 'react-router-dom';

import {Icon} from 'semantic-ui-react';

import css from '../style/app-view.less';

//TODO export classes to files
//TODO add examples with props and state
//TODO add example for redux
//TODO use lodash
//TODO add documentation for dependencies (and features)
//TODO add documentation of how to use scripts (testing)
//TODO add linter
//TODO decide between fontawesome and semantic-ui-react
class AppView extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.history.listen(location => console.dir(location));
  }

  render() {
    return (
      <div className="app-view">
        <HeaderView />
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

function HomeView(props) {
  return <div>Home View</div>;
}

function AboutView(props) {
  return <div>About View</div>;
}

function NavigationView(props) {
  const items = [
    <Link key="home" to="/"><Icon name="home"/>Home</Link>,
    <Link key="about" to="/about"><Icon name="info"/>About</Link>
  ];
  return <div className="navigation-view">{items}</div>;
}

function HeaderView(props) {
  return <div className="header-view"><Icon name="settings"/>Header</div>;
}

function FooterView(props) {
  return <div className="footer-view">Footer<Icon name="copyright"/></div>;
}

export default withRouter(AppView);
