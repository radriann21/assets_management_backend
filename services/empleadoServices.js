import db from "../models/index.js";
const { Empleado } = db;

export const getAllEmpleados = async () => {
  try {
    const empleados = await Empleado.findAll()
    return empleados
  } catch (error) {
    console.error("Error fetching empleados:", error)
    throw new Error("Error fetching empleados: " + error.message)
  }
}

export const getEmpleadoById = async (id) => {
  try {
    const empleado = await Empleado.findByPk(id)
    return empleado
  } catch (error) {
    console.error("Error fetching empleado:", error)
    throw new Error("Error fetching empleado: " + error.message)
  }
}

export const createEmpleado = async (data) => {
  try {
    const nuevoEmpleado = await Empleado.create(data)
    return nuevoEmpleado
  } catch (error) {
    console.error("Error creating empleado:", error)
    throw new Error("Error creating empleado: " + error.message)
  }
}

export const updateDepartamento = async (id, data) => {
  try {
    const empleado = await Empleado.findByPk(id)
    if (!empleado) {
      throw new Error(`Empleado with id ${id} not found`)
    }
    await empleado.update(data)
    return empleado
  } catch (error) {
    console.error("Error updating empleado:", error)
    throw new Error("Error updating empleado: " + error.message)
  }
}

export const deleteEmpleado = async (id) => {
  try {
    const empleado = await Empleado.findByPk(id)
    if (!empleado) {
      throw new Error(`Empleado with id ${id} not found`)
    }
    await empleado.destroy()
    return { message: "Empleado deleted successfully" }
  } catch (error) {
    console.error("Error deleting empleado:", error)
    throw new Error("Error deleting empleado: " + error.message)
  }
}