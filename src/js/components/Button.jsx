import React from 'react';
import PropTypes from 'prop-types';

import {Icon} from './Icon.jsx';
import {style, layout} from './styles.js';

const buttonStyle = Object.assign({},
    layout.relative,
    layout.inline,
    style.textPadding,
    style.borderRadius,
    style.clickableItem,
    style.shadowSmall
);

//button
function Button({children, onClick}) {
    return <div style={buttonStyle} onClick={onClick}>{children}</div>
}
Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.any.isRequired
};

function IconButton({children, icon, onClick}) {
    return <div style={buttonStyle} onClick={onClick}><Icon name={icon}/>{children}</div>;
}
IconButton.propTypes = {
    children: PropTypes.any.isRequired,
    onClick: PropTypes.func,
    icon: PropTypes.string.isRequired
};

export {Button, IconButton};
