import express from "express";
import UserController from "../controllers/userController.js";
import { authenticateToken } from "../middleware/authJWT.js";
const router = express.Router();

router.get("/", UserController.getAll);
router.get("/test", authenticateToken, UserController.test);
router.post("/refresh-token", UserController.refreshToken);
router.get("/:id", UserController.getById);

// router.post("/logout", UserController.logout);
router.post("/", UserController.create);
router.post("/login", UserController.login);

export default router;
