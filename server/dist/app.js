'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _data = require('./data/data');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

app.use(_bodyParser2.default.json({ type: 'application/json' }));

app.get("/", function (req, res) {
  res.send("Server running");
});

app.get("/api/employees", function (req, res) {
  res.json({
    success: true,
    message: "Operation successful.",
    data: _data.employees
  });
});

app.post("/api/employees/filter", function (req, res) {
  res.json({
    success: true,
    message: "Operation successful.",
    data: _data.employees.filter(emp => emp.type === req.body.employee_type)
  });
});

app.listen(3000);