import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Activo = sequelize.define("Activo", {
    id_activo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    identificador_interno: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    tipo_activo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    marca: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    modelo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    numero_serie: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fecha_adquisicion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    costo: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: 'operativo'
    },
    id_departamento: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'activos',
    timestamps: false,
    underscored: true,
    freezeTableName: true
  })
  return Activo;
}
