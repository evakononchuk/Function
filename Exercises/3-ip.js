"use strict";

const ipToInt = (ip = "127.0.0.1") => {
  const str = ip.split(".").map(Number);
  const sum = (((127 << 8) << 8) << 8) + ((0 << 8) << 8) + (0 << 8) + 1;
  return str.reduce((acc, val) => acc + val);
};

module.exports = { ipToInt };
