"use strict";

const generateKey = (length, possible) => {
  let key = "";
  for (let i = 0; i < length; i++) {
    key += possible[Math.floor(Math.random() * possible.length)];
  }
  return key;
};

module.exports = { generateKey };
