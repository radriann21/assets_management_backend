import express from "express";
import * as activoController from "../controllers/activoController.js";

const router = express.Router();

router.get("/", activoController.getAllActivos);
router.get("/:id", activoController.getActivoById);
router.post("/", activoController.createActivo);
router.put("/:id", activoController.updateActivo);
router.delete("/:id", activoController.deleteActivo);

export default router;
