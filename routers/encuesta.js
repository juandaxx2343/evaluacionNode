const { Router } = require('express')
const router = Router()


router.get("/",(req,res)=>{
    const{nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado} = req.query
    res.json({
        msg: "get api Encuesta",
        nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado
    })
})


router.post("/",(req,res)=>{
    const {nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado} = req.body
    res.json({
        msg: "post api Encuesta",
        nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado
    })
})


router.put("/",(req,res)=>{
    res.json({
        msg: "put api Encuesta"
    })
})

router.patch("/",(req,res)=>{
    res.json({
        msg: "patch api Encuesta"
    })
})

router.delete("/",(req,res)=>{
    res.json({
        msg:"delete api ventas"
    })
})



module.exports = router;