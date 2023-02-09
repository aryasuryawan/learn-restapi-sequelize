const router = require("express").Router()
const { createUserValidation } = require("../middlewares/user.validation")
const { verifyToken } = require ("../middlewares/verify.token")
// const { refreshToken } = require ("../controllers/refresh.token")

const { all, find, create, update, destroy , logout, login, refreshToken} = require("../controllers/user.controller")

router.post("/", createUserValidation, create)
router.post("/login", login)
router.post("/logout", logout)
router.get("/", verifyToken, all)
router.get("/:id", find)
router.put("/:id", update)
router.delete("/:id", destroy)
router.get("/token", refreshToken)

module.exports = router