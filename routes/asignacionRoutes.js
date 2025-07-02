import express from "express";
import * as asignacionController from "../controllers/asignacionController.js";

const router = express.Router();

router.get("/", asignacionController.getAllAsignaciones);
router.get("/:id", asignacionController.getAsignacionById);
router.post("/", asignacionController.createAsignacion);
router.put("/:id", asignacionController.updateAsignacion);
router.delete("/:id", asignacionController.deleteAsignacion);

export default router;
