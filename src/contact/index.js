const { Router } = require("express");
const {
  add,
  get,
  getById,
  removeContact,
  updateContact,
} = require("./controller");
const router = Router();
const userMiddleware = require("../../middleware/user_middleware");

router.post("/", userMiddleware(), add);
router.get("/", get);
router.get("/ById", getById);

router.delete("/", userMiddleware(), removeContact);
router.post("/update", userMiddleware(), updateContact);

module.exports = router;
