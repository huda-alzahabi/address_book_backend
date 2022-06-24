const { Router } = require("express");
const { add, get, removeContact } = require("./controller");
const router = Router();

router.post("/", add);
router.get("/", get);
router.delete("/", removeContact);

module.exports = router;
