import * as asignacionService from "../services/asignacionServices.js";

export const getAllAsignaciones = async (req, res) => {
  try {
    const asignaciones = await asignacionService.getAllAsignaciones();
    res.json(asignaciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAsignacionById = async (req, res) => {
  try {
    const asignacion = await asignacionService.getAsignacionById(req.params.id);
    res.json(asignacion);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const createAsignacion = async (req, res) => {
  try {
    const newAsignacion = await asignacionService.createAsignacion(req.body);
    res.status(201).json(newAsignacion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateAsignacion = async (req, res) => {
  try {
    const updatedAsignacion = await asignacionService.updateAsignacion(req.params.id, req.body);
    res.json(updatedAsignacion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteAsignacion = async (req, res) => {
  try {
    const result = await asignacionService.deleteAsignacion(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
