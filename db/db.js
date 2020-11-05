const mongoose = require('mongoose')
const uri = "mongodb://root:root@mongo:27017/studentdb?authSource=admin";

mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => { console.log("‘MongoDB Connected…’") })
    .catch(err => console.log(err))


const studentModel = mongoose.model("student", {
    cod_alumno: String,
    cod_curso: String,
    cantidad_asistencia: String
});

module.exports = {
    studentModel
}