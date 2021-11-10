import { createElement } from "react";

const tags = [
  'a',
  'button',
  'div',
];

const parseStringWithParams = (props, template, params) => {
  return template.reduce((acc, el, i) => {
    return acc + ((typeof params[i] === 'function') ? el + params[i](props) : el)
  }, '').replace(/;([^;]*)$/g, '');
};

const getStyle = (props, template, params) => {
  return parseStringWithParams(props, template, params).split(';').reduce((acc, el) => {
    const [ prop, value ] = el.trim().split(":");
    const splittedProp = prop.trim().split('-');

    const parsedProp = splittedProp.length > 1
      ? splittedProp[0] + splittedProp[1].charAt(0).toUpperCase() + splittedProp[1].slice(1)
      : splittedProp[0];

    return {
      ...acc,
      [parsedProp]: value.trim(),
    }
  }, {});
};

const getStyledComponent = (tag) => (template, ...params) => (props) => {
  return createElement(
    tag,
    { style: getStyle(props, template, params), ...props },
    [ props.children ]
  );
};

export default tags.reduce((acc, el) => ({
  ...acc,
  [el]: getStyledComponent(el),
}), {});
