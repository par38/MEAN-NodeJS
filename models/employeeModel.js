const mongoose = require('mongoose')

// //////////////////// FONCTIONNE //////////////
// const EmployeeModel = mongoose.model('Employee', {
//   name: { type: String },
//   position: { type: String },
//   office: { type: String },
//   salary: { type: Number }
// })

// module.exports = { EmployeeModel }
/////////////////////////////////////////////////
// // + ++++++++++ version officielle : schema MVC ++++++++++
const employeeSchema = mongoose.Schema({
  name: String,
  position: String,
  tel: String,
  office: String
});

// où Impiegati est la collection
const EmployeeModel = mongoose.model('EmployeeModel', employeeSchema, "Impiegati");

module.exports = { EmployeeModel }

