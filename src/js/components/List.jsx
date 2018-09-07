import React from 'react';
import PropTypes from 'prop-types';
import {style, layout} from './styles.js';

/**
 * List view
 */
export class List extends React.Component {

    render() {
        return (
            <div className={this.props.className}>
                <div style={style.title}>{this.props.header}</div>
                <div style={layout.scrollable}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

List.propTypes = {
    className: PropTypes.string,
    header: PropTypes.string,
    children: PropTypes.any
};


const listItemStyle = Object.assign(
    {},
    style.borderRadius,
    style.shadow,
    layout.relative,
    style.margin
);

/**
 * List Item
 */
export class ListItem extends React.Component {

	static propTypes = {
		className: PropTypes.string,
		header: PropTypes.string,
		children: PropTypes.any,
		footer: PropTypes.string
	};

	constructor(props) {
        super(props);

        this.state = {collapsed: true};

        this.changeCollapseState = this.changeCollapseState.bind(this);
    }

    changeCollapseState() {
        this.setState(prev => ({collapsed: !prev.collapsed}));
    }

    render() {
        return (
            <div style={listItemStyle}>
                <div style={style.title} onClick={this.changeCollapseState}>{this.props.header}</div>
                <div style={this.state.collapsed ? layout.hidden : null}>{this.props.children}</div>
                <div>{this.props.footer}</div>
            </div>
        );
    }
}
