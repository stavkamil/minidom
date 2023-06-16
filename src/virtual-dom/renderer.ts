export const mount = (_node: any, _target: any) => {
  _target.replaceWith(_node);
  return _node;
};

const renderElement = ({ tagName, attributes, children }: any) => {
  // create the element by it's tagName
  const _el = document.createElement(tagName);

  // set the element's attribute
  for (const [key, value] of Object.entries(attributes)) {
    _el.setAttribute(key, value);
  }

  // set children
  for (const child of children) {
    const $child = render(child);
    _el.appendChild($child);
  }

  return _el;
};

export const render = (virtualNode: any) => {
  if (typeof virtualNode === "string") {
    return document.createTextNode(virtualNode);
  }

  return renderElement(virtualNode);
};
