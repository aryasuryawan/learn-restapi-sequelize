const router = require("express").Router()
const { createUserValidation } = require("../middlewares/user.validation")
const { ApiAuthValidation } = require ("../middlewares/api.auth.validation")
// const { refreshToken } = require ("../controllers/refresh.token")
const { all, find, create, update, destroy , logout, login} = require("../controllers/user.controller")

router.post("/", createUserValidation, create)
router.post("/login", login)
router.post("/logout", logout)
router.get("/", ApiAuthValidation, all)
router.get("/:id", ApiAuthValidation, find)
router.put("/:id", ApiAuthValidation, update)
router.delete("/:id", ApiAuthValidation, destroy)
// router.get("/token", refreshToken)

module.exports = router