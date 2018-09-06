import React from 'react';
import {withRouter} from 'react-router-dom';

import PropTypes from 'prop-types';
import {style, layout} from './styles.js';

const linkStyle = Object.assign({}, style.clickableText, layout.inline, {padding: '5px 10px 5px 10px'});

//font awesome 5 icon
function Icon({style, name, onClick}) {
    return <i style={style} onClick={onClick} className={`fas fa-${name}`}></i>;
}
Icon.propTypes = {
    name: PropTypes.string.isRequired,
    style: PropTypes.object,
    onClick: PropTypes.func
};

//Icon Link
let IconLink = ({className, route, icon, children, history, onClick}) => {
    const iconMargin = {marginRight: 5};
    return (
      <div className={className} style={linkStyle} onClick={onClick || (() => history.push(route))}>
        <Icon style={iconMargin} name={icon}/>{children}
      </div>
      );
};
IconLink = withRouter(IconLink);
IconLink.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.any,
    icon: PropTypes.string.isRequired,
    route: PropTypes.string
};

export {Icon, IconLink};
