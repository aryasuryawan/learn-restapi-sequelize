const Pelatihan = require("../models/pelatihan.model")

exports.create = async (req, res) => {
    try {
        const { judul, kategori, deskripsi, instruktur, harga,gambar} = req.body

        const pelatihan = await Pelatihan.create({
            judul, 
            kategori, 
            deskripsi, 
            instruktur,
            harga,
            gambar
        })

        return res.status(201).json({
            status: 201,
            success: true,
            message: "Pelatihan baru dibuat",
            data: {
                pelatihan: pelatihan,
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
        const pelatihan = await Pelatihan.findAll()
        return res.status(200).json(pelatihan)

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
        const pelatihan = await Pelatihan.findOne({
            where: {
                id: id
            },
        })

        if (!pelatihan) {
            return res.status(404).json({
                status: 404,
                success: false,
                message: "Data pelatihan yang kamu cari gak ketemu tuh",
                data: null,
                error: "Data pelatihan yang kamu cari gak ketemu tuh"
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
        return res.status(200).json(pelatihan)
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

        const updated = await Pelatihan.update(req.body, {
            where: {
                id: id,
            }
        })

        if (!updated[0]) {
            return res.status(200).json({
                status: 200,
                success: false,
                message: "failed to update pelatihan",
                data: null,
                error: "Failed To Update pelatihan"
            })
        }

        return res.status(200).json({
            status: 200,
            success: true,
            message: "pelatihan updated",
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

        const destroyed = await Pelatihan.destroy({
            where: {
                id: id,
            }
        })

        if (!destroyed) {
            return res.status(200).json({
                status: 200,
                success: false,
                message: "failed to delete pelatihan",
                data: null,
                error: "Failed To Delete pelatihan"
            })
        }

        return res.status(200).json({
            status: 200,
            success: true,
            message: "pelatihan deleted",
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