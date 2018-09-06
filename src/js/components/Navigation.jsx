import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import {style, layout} from './styles.js';
import {Icon} from './components.jsx';


const navItemStyle = Object.assign({}, style.clickableText, style.bigFont, {
    padding: '5px 10px 5px 10px',
    marginBottom: 10
  });

/**
 * Navigation with toggle text
 */
class Navigation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {showText: false};

        this.toggleShowText = this.toggleShowText.bind(this);
    }

    toggleShowText() {
        this.setState(prevState => ({showText: !prevState.showText}));
    }

    render() {
        const iconMargin = this.state.showText ? {marginRight: 5} : null;
        const items = this.props.children.map(child => (
            <div
            key={child.key || child.props.id}
            className={child.props.className}
            style={navItemStyle}
            onClick={() => this.props.history.push(child.props.route)}>
                <Icon style={iconMargin} name={child.props.icon}/>
                {this.state.showText && child.props.children}
            </div>
        ));
        return (
            <div className={this.props.className} style={layout.fillVertical}>
                <Icon style={navItemStyle} name="bars" onClick={this.toggleShowText}/>
                {items}
            </div>
        );
    }
}

Navigation.propTypes = {
    items: PropTypes.array,
    className: PropTypes.string,
    children: PropTypes.any
}

/**
 * child docs:
 * key/id - required
 * route - required
 * icon - required
 * children - optional
 * className - optional
 */

export default withRouter(Navigation);

