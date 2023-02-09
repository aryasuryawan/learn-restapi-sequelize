const User = require("../models/user.model")
const bcrypt = require("bcrypt")

exports.ApiAuthValidation = async (req, res, next) => {
    
    try {
        // console.log(req.headers.email)
        const user = await User.findAll({
            where:{
                email: req.headers.apikey
            }
        })
                
        const match = await bcrypt.compare(req.headers.secret, user[0].password)
        if(!match) return res.status(401).json({message: "Akses yang anda gunakan salah. Akses ditolak"})
        // console.log(match) 
        console.log(req.headers);    
        // res.status(201).json({message: "sukses login"})
        next()
    } catch (error) {
        res.status(401).json({message: "Akses yang anda gunakan salah. Akses ditolak"})
    }
   
    
} 
    

