import db from "../models/index.js"
const { Asignacion } = db

export const getAllAsignaciones = async () => {
  try {
    return await Asignacion.findAll();
  } catch (error) {
    throw new Error("Error fetching asignaciones: " + error.message);
  }
}

export const getAsignacionById = async (id) => {
  try {
    const asignacion = await Asignacion.findByPk(id);
    if (!asignacion) throw new Error(`Asignacion with id ${id} not found`);
    return asignacion;
  } catch (error) {
    throw new Error("Error fetching asignacion: " + error.message);
  }
}

export const createAsignacion = async (data) => {
  try {
    return await Asignacion.create(data);
  } catch (error) {
    throw new Error("Error creating asignacion: " + error.message);
  }
}

export const updateAsignacion = async (id, data) => {
  try {
    const asignacion = await Asignacion.findByPk(id);
    if (!asignacion) throw new Error(`Asignacion with id ${id} not found`);
    await asignacion.update(data);
    return asignacion;
  } catch (error) {
    throw new Error("Error updating asignacion: " + error.message);
  }
}

export const deleteAsignacion = async (id) => {
  try {
    const asignacion = await Asignacion.findByPk(id);
    if (!asignacion) throw new Error(`Asignacion with id ${id} not found`);
    await asignacion.destroy();
    return { message: "Asignacion deleted successfully" };
  } catch (error) {
    throw new Error("Error deleting asignacion: " + error.message);
  }
}
