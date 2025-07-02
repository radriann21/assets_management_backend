import * as DepartamentoServices from '../services/departamentoServices.js';

export const getAllDepartamentos = async (req, res) => {
  try {
    const departamentos = await DepartamentoServices.getAllDepartamentos();
    res.status(200).json(departamentos);
  } catch (error) {
    console.error("Error fetching departamentos:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export const createDepartamento = async (req, res) => {
  try {
    const departamentoData = req.body
    const newDepartamento = await DepartamentoServices.createDepartamento(departamentoData)
    res.status(201).json(newDepartamento);
  } catch (error) {
    console.error("Error creating departamento:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export const getDepartamentoById = async (req, res) => {
  try {
    const { id } = req.params
    const departamento = await DepartamentoServices.getDepartamentoById(id);
    res.status(200).json(departamento);
  } catch (error) {
    console.error("Error fetching departamento:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export const updateDepartamento = async (req, res) => {
  try {
    const { id } = req.params
    const departamentoData = req.body
    const updatedDepartamento = await DepartamentoServices.updateDepartamento(id, departamentoData);
    res.status(200).json(updatedDepartamento);
  } catch (error) {
    console.error("Error updating departamento:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export const deleteDepartamento = async (req, res) => {
  try {
    const { id } = req.params
    const result = await DepartamentoServices.deleteDepartamento(id);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error deleting departamento:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}