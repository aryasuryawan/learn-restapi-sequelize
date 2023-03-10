require('dotenv').config();

module.exports = {
    HOST: process.env.MYSQL_HOST,
    USER: process.env.MYSQL_USERNAME,
    PASSWORD: process.env.MYSQL_PASSWORD,
    DB: process.env.MYSQL_DATABASE,
    DIALECT: "mysql",
}

