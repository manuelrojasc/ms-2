const express=require('express')
const router=express.Router()
const modelos=require('../db/db')

router.get('/', (req, res) => {
    res.send('welcome to my api 2')
})

router.get('/listar/alumnos', async(request, response) => {
    try {
        var result = await modelos.studentModel.find().exec();
        response.json(result); 

    } catch (error) {
        response.status(500).send(error);
    }
});

router.post("/registrar/alumno", async(request, response) => {
    try {
        var student = new modelos.studentModel(request.body);
        var result = await student.save();
        //response.send(result);
        response.json(result)

    } catch (error) {
        response.status(500).send(error);
    }
});



module.exports=router