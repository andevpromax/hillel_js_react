"use strict";

var _validator = _interopRequireDefault(require("validator"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /* 
* =============================================
* JS Modules
*/ // import { User } from "./components/User.js";
// import { users, ROLES } from "./components/variablesUsers.js";
// users
// 	.map(item => ROLES[item.role] ? ROLES[item.role](item) : new User(item))
// 	.forEach(item => console.log(item.getInfo()));
/* 
* =============================================
* Get all data
*/ // import * as UserFile from './components/User.js'
// console.log('Function', UserFile.firstFunction(10));
/* 
* =============================================
* export default
*/ // import Student from "./components/Student.js";
// const Mike = new Student({name: 'Mike'});
// console.log('Mike', Mike)
/* 
* =============================================
* Node.js
*/ // const message = 'Nodejs is cool!';
// console.log('message: ', message);
// const great = require('./greater.js');
// great('Hello friends!');
/* 
* =============================================
* NPM - Node package manager.
* 1. Site - https://www.npmjs.com/
* 2. CLI - Command line interface 
* 3. Registry - Реєстр пакетів.
*/ // import validator from 'validator';
// const validateEmail = email => {
// 	return validator.isEmail(email);
// };
// console.log('Is mang@gmail.com a valid email?: ', validateEmail('mang@gmail.com'));
// console.log('Is hello.com a valid email?: ', validateEmail('hello.com'));
/* 
* =============================================
* Delete - npm uninstall uuid
*/ /* 
* =============================================
* Install package with specific version
* npm install uuid@1.0.0
* https://semver.org/
*/ // import express from 'express';
// const app = express()
// app.get('/', function (req, res) {
//   res.send('<h1>Hello World</h1>');
// });
// app.get('/', function (req, res) {
//   res.send({
// 		message: 'Nodejs is AMAZING!!!'
// 	});
// });
// app.listen(5000, () => {
// 	console.log('App is running on port 5000')
// });
/* 
* =============================================
* Clean cache - npm cache clean
*/ /* 
* =============================================
* Управління версіями
* npm outdated - пошук всіх оновлень
* npm update - оновити всі ваші пакети до дозволеної версії
* npm update [імя пакета]- оновити версію конкретного пакету
*/ /* 
* =============================================
* Babel
*/
var validateEmail = function validateEmail(email) {
  return _validator["default"].isEmail(email);
};
console.log('Is mang@gmail.com a valid email?: ', validateEmail('mang@gmail.com'));
console.log('Is hello.com a valid email?: ', validateEmail('hello.com'));

/* 
* =============================================
* Class
*/
var User = /*#__PURE__*/function () {
  function User(name) {
    _classCallCheck(this, User);
    this._name = name;
  }
  _createClass(User, [{
    key: "name",
    get: function get() {
      return this._name;
    }
  }]);
  return User;
}();
_defineProperty(User, "hello", 'hello');
;
var mango = new User('Mango');
console.log('mango: ', mango);