import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Empleados = sequelize.define("Empleado", {
    id_empleado: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nombre_completo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cedula: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true
    },
    id_departamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    tableName: "empleados",
    timestamps: false,
    underscored: true,
    freezeTableName: true
  })
  return Empleados
}
