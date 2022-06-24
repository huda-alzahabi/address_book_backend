const { Router } = require("express");
const { add, get, removeContact, updateContact } = require("./controller");
const router = Router();

router.post("/", add);
router.get("/", get);
router.delete("/", removeContact);
router.post("/update", updateContact);

module.exports = router;
