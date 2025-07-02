import { Router } from "express";
import * as serviceController from "../controllers/empleadoController.js";

const router = Router();

router.get("/", serviceController.getAllEmpleados);
router.get("/:id", serviceController.getEmpleadoById);
router.post("/", serviceController.createEmpleado);
router.put("/:id", serviceController.updateEmpleado);
router.delete("/:id", serviceController.deleteEmpleado);

export default router;
