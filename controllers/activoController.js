import * as activoService from "../services/activoServices.js";

export const getAllActivos = async (req, res) => {
  try {
    const activos = await activoService.getAllActivos();
    res.json(activos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getActivoById = async (req, res) => {
  try {
    const activo = await activoService.getActivoById(req.params.id);
    res.json(activo);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const createActivo = async (req, res) => {
  try {
    const newActivo = await activoService.createActivo(req.body);
    res.status(201).json(newActivo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateActivo = async (req, res) => {
  try {
    const updatedActivo = await activoService.updateActivo(req.params.id, req.body);
    res.json(updatedActivo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteActivo = async (req, res) => {
  try {
    const result = await activoService.deleteActivo(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
