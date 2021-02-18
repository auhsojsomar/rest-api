const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

router.get('/', async (req,res) => {
    try{
        const employee = await Employee.find();
        res.json(employee);
    }catch(err){
        res.json(err);
    }
});

router.post('/', async (req, res) => {
    const employee = new Employee({
        employeeNumber: req.body.employeeNumber,
        fullName: req.body.fullName

    });

    try{
        const saveEmployee = await employee.save();
        res.json(saveEmployee);
    }catch(err){
        res.json(err);
    }
});

router.get('/:id', async (req,res) => {
    try{
        const employee = await Employee.findById(req.params.id);
        res.json(employee);
    }catch(err){
        res.json(err);
    }
});

router.delete('/:id', async (req,res) => {
    try{
        const removeEmployee = await Employee.remove({_id: req.params.id});
        res.json(removeEmployee);
    }catch(err){
        res.json(err);
    }
});

router.patch('/:id', async (req,res) => {
    try {
        const updateEmployee = await Employee.updateOne({_id: req.params.id},
            {$set: {fullName: req.body.fullName}});
        res.json(updateEmployee);
    } catch (error) {
        res.json(error)
    }
})

module.exports = router;