import db from "../models/index.js"
const { Activo } = db

export const getAllActivos = async () => {
  try {
    return await Activo.findAll();
  } catch (error) {
    throw new Error("Error fetching activos: " + error.message);
  }
}

export const getActivoById = async (id) => {
  try {
    const activo = await Activo.findByPk(id);
    if (!activo) throw new Error(`Activo with id ${id} not found`);
    return activo;
  } catch (error) {
    throw new Error("Error fetching activo: " + error.message);
  }
}

export const createActivo = async (data) => {
  try {
    return await Activo.create(data);
  } catch (error) {
    throw new Error("Error creating activo: " + error.message);
  }
}

export const updateActivo = async (id, data) => {
  try {
    const activo = await Activo.findByPk(id);
    if (!activo) throw new Error(`Activo with id ${id} not found`);
    await activo.update(data);
    return activo;
  } catch (error) {
    throw new Error("Error updating activo: " + error.message);
  }
}

export const deleteActivo = async (id) => {
  try {
    const activo = await Activo.findByPk(id);
    if (!activo) throw new Error(`Activo with id ${id} not found`);
    await activo.destroy();
    return { message: "Activo deleted successfully" };
  } catch (error) {
    throw new Error("Error deleting activo: " + error.message);
  }
}
