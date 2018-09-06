import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import {Icon} from './Icon.jsx';
import {style, layout} from './styles.js';

const iconMargin = {marginRight: 5};

const tileStyle = Object.assign(
    {},
    layout.relative,
    layout.inline,
    style.clickableItem,
    style.bigFont,
    style.borderRadius,
    style.shadowSmall,
    {
        padding: '20px 30px 20px 30px',
        margin: 20
    }
);

//Tiles view
function Tiles({children, history, className}) {
    const items = children.map(child => (
        <div
        key={child.key || child.props.id}
        className={child.props.className}
        style={tileStyle}
        onClick={() => history.push(child.props.route)}
        >
            <Icon style={iconMargin} name={child.props.icon}/>
            {child.props.children}
        </div>)
    );
    return <div className={className}>{items}</div>;
}
Tiles.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string
};

/**
 * child docs:
 * key/id - required
 * route - required
 * icon - required
 * children - optional
 * className - optional
 */

export default withRouter(Tiles);
