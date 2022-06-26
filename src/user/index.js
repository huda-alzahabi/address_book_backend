const { Router } = require("express");
const { get, register, login } = require("./controller/user");
const router = Router();
const userMiddleware = require("../../middleware/user_middleware");
router.get("/", (req, res) => get(req, res));
router.post("/auth/register", register);
router.post("/auth/login", login);

module.exports = router;
