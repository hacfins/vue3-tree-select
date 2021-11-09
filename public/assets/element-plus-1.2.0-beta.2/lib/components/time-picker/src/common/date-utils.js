'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const rangeArr = (n) => {
  return Array.from(Array(n).keys());
};
const extractDateFormat = (format) => {
  return format.replace(/\W?m{1,2}|\W?ZZ/g, "").replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, "").trim();
};
const extractTimeFormat = (format) => {
  return format.replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?Y{2,4}/g, "").trim();
};

exports.extractDateFormat = extractDateFormat;
exports.extractTimeFormat = extractTimeFormat;
exports.rangeArr = rangeArr;
//# sourceMappingURL=date-utils.js.map
