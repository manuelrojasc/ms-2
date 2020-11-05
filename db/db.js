const mongoose = require('mongoose')
const uri = "mongodb://root:root@mongo:27017/studentdb?authSource=admin";

mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => { console.log("‘MongoDB Connected…’") })
    .catch(err => console.log(err))


const studentModel = mongoose.model("student", {
    codigo: String,
    nombre: String,
    edad: String
});

module.exports = {
    studentModel
}