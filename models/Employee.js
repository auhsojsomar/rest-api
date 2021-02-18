const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    employeeNumber:{
        type:Number,
        required: true,
    },
    fullName :{
        type:String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Employees', EmployeeSchema);