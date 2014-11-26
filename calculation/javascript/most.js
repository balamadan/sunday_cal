var lowercase = function(string){return isString(string) ? string.toLowerCase() : string;};
var uppercase = function(string){return isString(string) ? string.toUpperCase() : string;};

var manualUppercase = function(s) {
  return isString(s)
      ? s.replace(/[a-z]/g, function(ch) {return fromCharCode(ch.charCodeAt(0) & ~32);})
      : s;
};
var manualLowercase = function(s) {
  return isString(s)
      ? s.replace(/[A-Z]/g, function(ch) {return fromCharCode(ch.charCodeAt(0) | 32);})
      : s;
};

function fromCharCode(code) {return String.fromCharCode(code);}

function int(str) {
  return parseInt(str, 10);
}
function isUndefined(value){return typeof value == 'undefined';}

function isDefined(value){return typeof value != 'undefined';}


function isObject(value){return value != null && typeof value == 'object';}


function isString(value){return typeof value == 'string';}


function isNumber(value){return typeof value == 'number';}

function isDate(value){
  return toString.apply(value) == '[object Date]';
}


function isArray(value) {
  return toString.apply(value) == '[object Array]';
}


function isFunction(value){return typeof value == 'function';}


function isWindow(obj) {
  return obj && obj.document && obj.location && obj.alert && obj.setInterval;
}


function isScope(obj) {
  return obj && obj.$evalAsync && obj.$watch;
}


function isFile(obj) {
  return toString.apply(obj) === '[object File]';
}


function isBoolean(value) {
  return typeof value == 'boolean';
}


function trim(value) {
  return isString(value) ? value.replace(/^\s*/, '').replace(/\s*$/, '') : value;
}
