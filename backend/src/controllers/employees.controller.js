const employees = {};
const Employee = require("../models/employees")

employees.getEmployee = async(req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);

};

employees.getEmployees = async(req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};

employees.create = async(req, res) => {
  const employee = new Employee(req.body);
  await employee.save();
  res.send({message:"Employee created"});
};

employees.delete = async(req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.send({message:"Employee deleted"});
};

employees.update = async(req, res) => {
  await Employee.findByIdAndUpdate(req.params.id,req.body);
  res.send({message:"Employee updated"});
};

module.exports = employees;
