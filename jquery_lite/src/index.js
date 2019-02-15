const DOMNodeCollection = require('./dom_node_collection'); 

function $l(selector) {
  let selected;
  if (selector instanceof HTMLElement) {
    selected = [selector]; 
    // let selected = Array.from(selector); 
  } else if (selector instanceof HTMLCollection) {
    selected = Array.from(selector); 
  } else {
    const nodeList = document.querySelectorAll(selector);
    selected = Array.from(nodeList);
  }
  return new DOMNodeCollection(selected); 
};

window.$l = $l;
