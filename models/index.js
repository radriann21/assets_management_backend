import { Sequelize, DataTypes } from "sequelize";
import config from "../config/database.js";

const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  port: dbConfig.port,
  dialect: dbConfig.dialect
})

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

import DepartamentoModel from "./Departamentos.js";
import EmpleadoModel from "./Empleados.js";
import ActivoModel from "./Activo.js";
import AsignacionesModel from "./Asignaciones.js";

db.Departamento = DepartamentoModel(sequelize, DataTypes);
db.Empleado = EmpleadoModel(sequelize, DataTypes);
db.Activo = ActivoModel(sequelize, DataTypes);
db.Asignacion = AsignacionesModel(sequelize, DataTypes);

// Relaciones Departamento
db.Departamento.hasMany(db.Empleado, {
  foreignKey: "id_departamento",
  as: "empleados"
})
db.Departamento.hasMany(db.Activo, {
  foreignKey: "id_departamento",
  as: "activos"
})


// Relaciones Empleado
db.Empleado.belongsTo(db.Departamento, {
  foreignKey: "id_departamento",
  as: "departamento"
})

db.Empleado.belongsToMany(db.Activo, {
  through: db.Asignacion,
  foreignKey: "id_empleado",
  otherKey: "id_activo",
  as: "activosAsignados"
})
db.Empleado.hasMany(db.Asignacion, {
  foreignKey: "id_empleado",
  as: "asignaciones"
})


// Relaciones Activo
db.Activo.belongsTo(db.Departamento, {
  foreignKey: "id_departamento",
  as: "departamento"
})

db.Activo.belongsToMany(db.Empleado, {
  through: db.Asignacion,
  foreignKey: "id_activo",
  otherKey: "id_empleado",
  as: "empleadosAsignados"
})
db.Activo.hasMany(db.Asignacion, {
  foreignKey: "id_activo",
  as: "asignaciones"
})


// Relaciones Asignacion
db.Asignacion.belongsTo(db.Empleado, {
  foreignKey: "id_empleado",
  as: "empleado"
})
db.Asignacion.belongsTo(db.Activo, {
  foreignKey: "id_activo",
  as: "activo"
})

export default db;