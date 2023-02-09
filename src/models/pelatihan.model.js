const { DataTypes } = require("sequelize")
const database = require("../database")

const pelatihan = database.define("pelatihan", {
    judul: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    kategori: {
        type: DataTypes.STRING,
        allowNull: false
    },
    deskripsi: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    instruktur: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gambar: {
        type: DataTypes.STRING,
        allowNull: false
    },
    harga: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
})

module.exports = pelatihan

