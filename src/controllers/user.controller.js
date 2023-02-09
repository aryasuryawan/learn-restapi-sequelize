const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// exports.refreshToken = async(req, res) => {
//     try {
//         const refreshToken = req.cookies.refreshToken;
//         console.log(refreshToken)
//         // if(!refreshToken) return res.sendStatus(401);
//         const user = await User.findAll({
//             where:{
//                 refresh_token: refreshToken
//             }
//         });
//         if(!user[0]) return res.sendStatus(403);
//         jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
//             if(err) return res.sendStatus(403);
//             // const userId = user[0].id;
//             const username = user[0].username;
//             const email = user[0].email;
//             const accessToken = jwt.sign({username, email}, process.env.ACCESS_TOKEN_SECRET,{
//                 expiresIn: '15s'
//             });
//             res.json({ accessToken });
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }

exports.create = async (req, res) => {
    try {
        const { firstname, lastname, username, email, password, roles} = req.body
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);
        const user = await User.create({
            username : username,
            email : email,
            firstname : firstname,
            lastname : lastname,
            password : hashPassword, 
            roles : roles
        })

        return res.status(201).json({
            status: 201,
            success: true,
            message: "User baru dibuat",
            data: {
                user: user,
            },
            error: null
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            status: 500,
            success: false,
            message: "internal server error",
            data: null,
            error: "Internal Server Error"
        })
    }
}

// exports.all = async (req, res) => {
//     try {
//         const pelatihan = await Pelatihan.findAll()
//         return res.status(200).json({
//             status: 200,
//             success: true,
//             message: "ok",
//             data: {
//                 pelatihan,
//             },
//             error: null
//         })
exports.all = async (req, res) => {
    try {
        const user = await User.findAll()
        return res.status(200).json(user)

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            status: 500,
            success: false,
            message: "internal server error",
            data: null,
            error: "Internal Server Error"
        })
    }
}

exports.find = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findOne({
            where: {
                id: id
            },
        })

        if (!user) {
            return res.status(404).json({
                status: 404,
                success: false,
                message: "Data user yang kamu cari gak ketemu tuh",
                data: null,
                error: "Data user yang kamu cari gak ketemu tuh"
            })
        }

        // return res.status(200).json({
        //     status: 200,
        //     success: true,
        //     message: "ok",
        //     data: {
        //         pelatihan: pelatihan,
        //     },
        //     error: null
        // })
        return res.status(200).json(user)
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            status: 500,
            success: false,
            message: "internal server error",
            data: null,
            error: "Internal Server Error"
        })
    }
}

exports.update = async (req, res) => {
    try {
        const { id } = req.params
        const { firstname, lastname, username, email, password, roles} = req.body
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);

        const updated = await User.update({
            username : username,
            email : email,
            firstname : firstname,
            lastname : lastname,
            password : hashPassword, 
            roles : roles
        }, {
            where: {
                id: id,
            }
        })

        if (!updated[0]) {
            return res.status(200).json({
                status: 200,
                success: false,
                message: "failed to update user",
                data: null,
                error: "Failed To Update user"
            })
        }

        return res.status(200).json({
            status: 200,
            success: true,
            message: "user updated",
            data: null,
            error: null
        })

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            status: 500,
            success: false,
            message: "internal server error",
            data: null,
            error: "Internal Server Error"
        })
    }
}

exports.destroy = async (req, res) => {
    try {
        const { id } = req.params

        const destroyed = await User.destroy({
            where: {
                id: id,
            }
        })

        if (!destroyed) {
            return res.status(200).json({
                status: 200,
                success: false,
                message: "failed to delete user",
                data: null,
                error: "Failed To Delete user"
            })
        }

        return res.status(200).json({
            status: 200,
            success: true,
            message: "user deleted",
            data: null,
            error: null
        })

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            status: 500,
            success: false,
            message: "internal server error",
            data: null,
            error: "Internal Server Error"
        })
    }
}

exports.login = async (req, res) => {
    try {
        const user = await User.findAll({
            where:{
                email: req.body.email
            }
        })
        const match = await bcrypt.compare(req.body.password, user[0].password)
        // const match = await bcrypt.compare("12345", user[0].password);
        // console.log(match)
        // console.log(req.body.password)
        // console.log(user[0].password)
        if(!match) return res.status(400).json({message: "email atau password salah"})
        // return res.status(200).json({message: "User authorized"})
        // return res.status(200).json(user)
        const username = user[0].username
        const email = user[0].email
        const accessToken = jwt.sign({username, email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '20s'
        });
        const refreshToken = jwt.sign({username, email}, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        })
        await User.update({
            refresh_token: refreshToken}, {
            where:{
                email: req.body.email,
            }
        })
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ accessToken });
    } catch (error) {
        res.status(404).json({msg:"Email tidak tersedia"});
    }
}

exports.logout = async (req, res) => {
    const refreshToken = req.cookies.refreshToken
    if(!refreshToken) return res.sendStatus(204);
    const user = await User.findAll({
        where: {
            refresh_token: refreshToken
        }
    })
    if(!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await User.update({refresh_token: null},{
        where:{
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    // return res.sendStatus(200);
    return res.status(200).json({message:"Logout Sukses"});
}


