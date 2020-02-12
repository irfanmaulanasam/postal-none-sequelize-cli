'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

require('babel-polyfill');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const express = require('express'),
// dotenv = require('dotenv')
// require('babel-polyfill')
// import ReflectionWithJsObject from './src/usingJSObject/controllers/Reflection';
// import ReflectionWithDB from './src/usingDB/controller/Reflection';
// import UserWithDb from './src/usingDB/controller/Users';
// import Auth from './src/usingDB/middleware/Auth';

_dotenv2.default.config();
// const Reflection = process.env.TYPE === 'db' ? ReflectionWithDB : ReflectionWithJsObject;
// server.js
var app = (0, _express2.default)();

app.use(_express2.default.json());

app.get('/', function (req, res) {
  return res.status(200).send({ 'message': 'YAY! Congratulations! Your first endpoint is working' });
});

// app.post('/api/v1/reflections', Auth.verifyToken, Reflection.create);
// app.get('/api/v1/reflections', Auth.verifyToken, Reflection.getAll);
// app.get('/api/v1/reflections/:id', Auth.verifyToken, Reflection.getOne);
// app.put('/api/v1/reflections/:id', Auth.verifyToken, Reflection.update);
// app.delete('/api/v1/reflections/:id', Auth.verifyToken, Reflection.delete);
// app.post('/api/v1/users', UserWithDb.create);
// app.post('/api/v1/users/login',UserWithDb.login);
// app.delete('/api/v1/users/me', Auth.verifyToken, UserWithDb.delete);

app.listen(3000);
console.log('app running on port ', 3000);