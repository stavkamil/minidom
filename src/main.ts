import createElement from "./virtual-dom/createElement";
import { mount, render } from "./virtual-dom/renderer";

const createVirtualAppComponent = (count: number) => {
  return createElement("div", {
    attributes: {
      id: "app",
      dataCount: count,
    },
    children: [
      createElement("input"),
      String(count),
      createElement("img", {
        attributes: {
          src: "https://media.giphy.com/media/cuPm4p4pClZVC/giphy.gif",
        },
      }),
    ],
  });
};

let count = 0;
let virtualAppComponent = createVirtualAppComponent(count);
const _appDomElement = render(virtualAppComponent);
let _rootElement = mount(_appDomElement, document.getElementById("app"));

setInterval(() => {
  count++;
  const _newAppDomElement = render(createVirtualAppComponent(count));
  _rootElement = mount(_newAppDomElement, _rootElement);
}, 1000);
