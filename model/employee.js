const mongoose = require('mongoose')

const schema = mongoose.Schema;

const employeeSchema = new schema({
    name: { type: String },
    salary: { type: Number },
    gender: { type: String },
    department: {type: String}
});

const employeeModel = mongoose.model("employee", employeeSchema)

module.exports = employeeModel;