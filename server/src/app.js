import express from 'express';
import { employees } from "./data/data"
import bodyParser from 'body-parser'

const app = express();

app.use(bodyParser.json({ type: 'application/json' }))

app.get("/", function(req, res) {
  res.send("Server running")
});

app.get("/api/employees", function(req, res) {
  res.json({
    success: true,
    message: "Operation successful.",
    data: employees
  });
});

app.post("/api/employees/filter", function(req, res) {
  res.json({
    success: true,
    message: "Operation successful.",
    data: employees.filter(emp => emp.type === req.body.employee_type)
  });
});

app.listen(3000);
