import { Router } from "express";
import * as departamentoController from "../controllers/departamentoController.js";

const router = Router();

router.get("/", departamentoController.getAllDepartamentos);
router.post("/", departamentoController.createDepartamento);
router.get("/:id", departamentoController.getDepartamentoById);
router.put("/:id", departamentoController.updateDepartamento);
router.delete("/:id", departamentoController.deleteDepartamento);

export default router;