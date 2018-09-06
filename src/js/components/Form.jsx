import React from 'react';
import PropTypes from 'prop-types';

import {Icon} from './Icon.jsx';
import {Button} from './Button.jsx';

import {style, layout} from './styles.js';

//styles
const formStyle = Object.assign({},
    layout.inline,
    style.borderRadius,
    style.shadow,
    layout.noOverflow
);
const fieldStyle = {marginBottom: 5};

const contentWrapperStyle = {
    padding: 5
};

const labelStyle = Object.assign({width: 150}, layout.inline, style.textPadding);
const inputStyle = Object.assign({width: 200}, style.input);

/**
 * Form view for framed documents with title and fields
 */
export default class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
        for(let child of this.props.children) {
            this.state[child.props.id] = child.props.default;
        }

        this.createField = this.createField.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        //console.dir(e);
        this.setState({[e.target.id]: e.target.value});
    }

    handleClick() {
        // console.dir(e);
    }

    createField(child) {
        switch(child.props.type) {
            case 'text': return (
                <div key={child.key || child.props.id} style={fieldStyle}>
                    {child.props.icon && <Icon name={child.props.icon}/>}
                    <span style={labelStyle}>{child.props.children}</span>
                    <input style={inputStyle} type="text" value={this.state[child.props.id]} onChange={this.handleChange}/>
                </div>
            );
            case 'button': return (
                <Button
                onClick={this.handleClick}
                key={child.key || child.props.id}>
                    {child.props.children}
                </Button>
            );
            case 'readonly': return null;
            case 'textarea': return null;
            case 'select': return null;
            case 'date': return null;
            default:
                return null;
        }
    }

    render() {
        const items = this.props.children.map(this.createField);

        return(
            <div className={this.props.className} style={formStyle}>
                <div style={style.title}>{this.props.header}</div>
                <div style={contentWrapperStyle}>
                    {items}
                </div>
            </div>
        );
    }
}

/**
 * Child props:
 * id
 * children
 * default
 * icon
 * type
 * onClick
 */

Form.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    header: PropTypes.string
}
