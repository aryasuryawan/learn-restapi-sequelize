require('dotenv').config()
const cookieParser = require("cookie-parser")
const cors = require("cors")
const express = require("express")
const database = require("./database")
const pelatihanRoute = require("./routes/pelatihan.routes")
const userRoute = require("./routes/user.routes")


const app = express()
const port = process.env.SERVER_PORT

app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

database.sync({ force: false }).then(() => {
    console.info("database synced")
}).catch(err => {
    console.error("failed to sync database: " + err.message)
})

app.get("/", (req, res) => {
    res.json({
        message: "Sinaudigital.com REST API Server"
    })
})
app.use("/api/pelatihan", pelatihanRoute)
app.use("/api/user", userRoute)

app.listen(port, () => console.log(`Server up and running on port ${port}`))