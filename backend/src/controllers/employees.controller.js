const employeesControllers = {};
const Employee = require('../models/Employee');

employeesControllers.getEmployees = async (req,res) => {
    const employees = await Employee.find();
    res.json(employees);
};
employeesControllers.createEmployees = async (req,res) => {
    const newEmployee = new Employee(req.body)
    await newEmployee.save();
    res.send({message:'Employee Created'})
};

employeesControllers.getEmployee = async (req,res) => {
    const employee = await Employee.findById(req.params.id);
    res.send(employee);
};

employeesControllers.editEmployees = async (req,res) => {
    await Employee.findByIdAndUpdate(req.params.id,req.body)
    res.json({status:'Employee updated'})
};

employeesControllers.deleteEmployee = async (req,res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({status:'Employee Deleted'});
};

module.exports = employeesControllers;