exports.createUserValidation = (req, res, next) => {
    const { firstname, lastname, username, email, password } = req.body

    if (username === undefined || username == "") {
        return res.status(400).json({
            status: 400,
            success: false,
            message: "bad request",
            data: {
                original: req.body
            },
            error: "Username field is required"
        })
    }
    if (email === undefined || email == "") {
        return res.status(400).json({
            status: 400,
            success: false,
            message: "bad request",
            data: {
                original: req.body
            },
            error: "email field is required"
        })
    }

    if (password === undefined || password == "") {
        return res.status(400).json({
            status: 400,
            success: false,
            message: "bad request",
            data: {
                original: req.body
            },
            error: "Password field is required"
        })
    }

    if (firstname === undefined || firstname == "") {
        return res.status(400).json({
            status: 400,
            success: false,
            message: "bad request",
            data: {
                original: req.body
            },
            error: "firstname field is required"
        })
    }

    if (lastname === undefined || lastname == "") {
        return res.status(400).json({
            status: 400,
            success: false,
            message: "bad request",
            data: {
                original: req.body
            },
            error: "lastname field is required"
        })
    }

    next()
}