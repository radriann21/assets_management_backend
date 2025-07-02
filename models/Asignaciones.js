import { DataTypes, DATE } from "sequelize";

export default (sequelize) => {
  const Asignacion = sequelize.define("Asignacion", {
    id_asignacion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    id_empleado: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_activo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha_asignacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    fecha_devolucion: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: "asignaciones",
    timestamps: false,
    underscored: true,
    freezeTableName: true
  })
  return Asignacion;
}