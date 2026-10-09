import express from "express";
import TermekController from "../controllers/termekController.js";

const router = express.Router();

router.get("/", TermekController.getAll);
router.get("/:id", TermekController.getById);
router.post("/", TermekController.create);
export default router;