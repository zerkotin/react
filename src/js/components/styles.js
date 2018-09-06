const color = {
  shadow: '#6b6a6a',
  error: '#e96060',
  bg: '#fcfcfc',
  bgLight: '#f5f5f5',
  bgMedium: '#e5e5e5',
  bgDark: '#d3d3d3',
  bgDarker: '#c6c6c6',
  bgDarkest: '#212121',
  light: '#3acae1',
  dark: '#056c85'
};

const relative = {position: 'relative'};
const absolute = {position: 'absolute'};
const shadow = {boxShadow: `0px 0px 3px 2px ${color.shadow}`};
const shadowSmall = {boxShadow: '0 0 2px black'};
const innerShadow = {boxShadow: `0px 0px 1px 1px ${color.shadow} inset`};
const inline = {display: 'inline-block'};
const fillHorizontal = {width: '100%'};
const fillVertical = {height: '100%'};
const fill = Object.assign({}, fillHorizontal, fillVertical);
const clickableItem = {
  color: color.bg,
  backgroundColor: color.dark,
  cursor: 'pointer'
};
const clickableText = {
  color: color.dark,
  cursor: 'pointer'
};
const noBorder = {border: 'none'};
const textPadding = {padding: '5px 10px 5px 10px'};
const borderRadius = {borderRadius: 5};
const center = {top: '50%', left: '50%', transform: 'translate(-50%, -50%)'};
const right = {right: 0};
const bigFont = {fontSize: 16};
const noOverflow = {overflow: 'hidden'};
const input = Object.assign({}, borderRadius, {outline: 'none'}, innerShadow, noBorder, textPadding);
const title = {padding: 5, color: color.bg, backgroundColor: color.dark};
const scrollable = {overflow: 'auto'};
const hidden = {display: 'none'};
const margin = {margin: 10};

//specific styles should be in their own files (tile, link, navItem, button, etc..)
const style = {
  clickableItem,
  clickableText,
  title,
  borderRadius,
  bigFont,
  textPadding,
  shadow,
  innerShadow,
  noBorder,
  input,
  shadowSmall,
  margin
};

const layout = {
  relative, absolute, inline, fill, fillHorizontal, fillVertical, center, right, noOverflow, scrollable, hidden
};

export {style, layout, color};
