import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Departamento = sequelize.define("Departamento", {
    id_departamento: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nombre_departamento: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    }
  }, {
    tableName: "departamentos",
    timestamps: false,
    underscored: true,
    freezeTableName: true
  })

  return Departamento
}