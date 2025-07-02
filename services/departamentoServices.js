import db from "../models/index.js"
const { Departamento } = db

export const getAllDepartamentos = async () => {
  try {
    const departamentos = await Departamento.findAll()
    return departamentos
  } catch (error) {
    console.error("Error fetching departamentos:", error)
    throw new Error("Error fetching departamentos: " + error.message)
  }
}

export const getDepartamentoById = async (id) => {
  try {
    const departamento = await Departamento.findByPk(id)
    if (!departamento) {
      throw new Error(`Departamento with id ${id} not found`)
    }
    return departamento
  } catch (error) {
    console.error("Error fetching departamento:", error)
    throw new Error("Error fetching departamento: " + error.message)
  }
}

export const createDepartamento = async (data) => {
  try {
    const newDepartamento = await Departamento.create(data)
    return newDepartamento
  } catch (error) {
    console.error("Error creating departamento:", error)
    throw new Error("Error creating departamento: " + error.message)
  }
}

export const updateDepartamento = async (id, data) => {
  try {
    const departamento = await Departamento.findByPk(id)
    if (!departamento) {
      throw new Error(`Departamento with id ${id} not found`)
    }
    await departamento.update(data)
    return departamento
  } catch (error) {
    console.error("Error updating departamento:", error)
    throw new Error("Error updating departamento: " + error.message)
  }
}

export const deleteDepartamento = async (id) => {
  try {
    const departamento = await Departamento.findByPk(id)
    if (!departamento) {
      throw new Error(`Departamento with id ${id} not found`)
    }
    await departamento.destroy()
    return { message: "Departamento deleted successfully" }
  } catch (error) {
    console.error("Error deleting departamento:", error)
    throw new Error("Error deleting departamento: " + error.message)
  }
}