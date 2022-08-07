"use strict";

const methods = (iface) => {
  const obj = [];
  for (const name in iface) {
    const element = iface[name];
    if (typeof element === "function") {
      obj.push([obj, element.length]);
    }
    return obj;
  }
};

module.exports = { methods };
