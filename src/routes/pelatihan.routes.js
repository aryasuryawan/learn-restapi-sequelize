const router = require("express").Router()
const { ApiAuthValidation } = require ("../middlewares/api.auth.validation")


const { all, find, create, update, destroy } = require("../controllers/pelatihan.controller")

router.post("/", ApiAuthValidation, create)
router.get("/", ApiAuthValidation, all)
router.get("/:id", ApiAuthValidation, find)
router.put("/:id", ApiAuthValidation, update)
router.delete("/:id", ApiAuthValidation, destroy)

module.exports = router