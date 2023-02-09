const router = require("express").Router()
const { ApiAuthValidation } = require ("../middlewares/api.auth.validation")


const { all, find, create, update, destroy } = require("../controllers/pelatihan.controller")

router.post("/", create)
router.get("/", ApiAuthValidation, all)
router.get("/:id", ApiAuthValidation, find)
router.put("/:id", update)
router.delete("/:id", destroy)

module.exports = router