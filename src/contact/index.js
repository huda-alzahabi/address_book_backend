const { Router } = require("express");
const { add, get,getById, removeContact, updateContact } = require("./controller");
const router = Router();

router.post("/", add);
router.get("/", get);
router.get("/ById", getById);

router.delete("/", removeContact);
router.post("/update", updateContact);

module.exports = router;
