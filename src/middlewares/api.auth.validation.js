const User = require("../models/user.model")
const bcrypt = require("bcrypt")

exports.ApiAuthValidation = async (req, res, next) => {
    try {
        const user = await User.findAll({
            where:{
                email: req.body.email
            }
        })
                
        const match = await bcrypt.compare(req.body.password, user[0].password)
        if(!match) return res.status(403).json({message: "email atau password salah"})
        // console.log(match)      
        // res.status(201).json({message: "sukses login"})
        next()
    } catch (error) {
        res.status(403).json({message: "email atau password salah"})
    }
   
    
} 
    

