import * as EmpleadoService from "../services/empleadoServices.js"

export const getAllEmpleados = async (req, res) => {
  try {
    const empleados = await EmpleadoService.getAllEmpleados();
    if (!empleados || empleados.length === 0) {
      return res.status(404).json({ message: "No empleados found" });
    }
    res.status(200).json(empleados);
  } catch (error) {
    console.error("Error fetching empleados:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export const getEmpleadoById = async (req, res) => {
  try {
    const { id } = req.params;
    const empleado = await EmpleadoService.getEmpleadoById(id);
    if (!empleado) {
      return res.status(404).json({ message: "Empleado not found" });
    }
    res.status(200).json(empleado);
  } catch (error) {
    console.error("Error fetching empleado:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export const createEmpleado = async (req, res) => {
  try {
    const nuevoEmpleado = await EmpleadoService.createEmpleado(req.body);
    res.status(201).json(nuevoEmpleado);
  } catch (error) {
    console.error("Error creating empleado:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export const updateEmpleado = async (req, res) => {
  try {
    const { id } = req.params;
    const empleadoActualizado = await EmpleadoService.updateEmpleado(id, req.body);
    res.status(200).json(empleadoActualizado);
  } catch (error) {
    console.error("Error updating empleado:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export const deleteEmpleado = async (req, res) => {
  try {
    const { id } = req.params;
    await EmpleadoService.deleteEmpleado(id);
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting empleado:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}