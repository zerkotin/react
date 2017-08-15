import React from 'react';
import PropTypes from 'prop-types';

//font awesome icon
function Icon(props) {
  return <i className={'fa fa-' + props.name} aria-hidden="true"></i>;
}

Icon.propTypes = {
  name: PropTypes.string.isRequired
};

export {Icon};
