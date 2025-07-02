CREATE TABLE departamentos (
  id_departamento SERIAL PRIMARY KEY,
  nombre_departamento VARCHAR(100) NOT NULL
);

CREATE TABLE empleados (
  id_empleado SERIAL PRIMARY KEY,
  nombre_completo VARCHAR(100) NOT NULL,
  cedula VARCHAR(20) NOT NULL UNIQUE,
  id_departamento INT NOT NULL,
  FOREIGN KEY (id_departamento) REFERENCES departamentos(id_departamento)
);

CREATE TABLE activos (
  id_activo SERIAL PRIMARY KEY,
  identificador_interno VARCHAR(50) NOT NULL UNIQUE,
  tipo_activo VARCHAR(50) NOT NULL,
  marca VARCHAR(50) NOT NULL,
  modelo VARCHAR(50) NOT NULL,
  numero_serie VARCHAR(50) NOT NULL UNIQUE,
  fecha_adquisicion DATE NOT NULL,
  costo DECIMAL(10, 2) NOT NULL,
  estado VARCHAR(20) NOT NULL CHECK (estado IN ('activo', 'inactivo', 'en reparacion')),
  id_departamento INT NOT NULL,
  FOREIGN KEY (id_departamento) REFERENCES departamentos(id_departamento)
);

CREATE TABLE asignaciones (
  id_asignacion SERIAL PRIMARY KEY,
  id_empleado INT NOT NULL,
  id_activo INT NOT NULL,
  fecha_asignacion DATE NOT NULL,
  fecha_devolucion DATE,
  FOREIGN KEY (id_empleado) REFERENCES empleados(id_empleado),
  FOREIGN KEY (id_activo) REFERENCES activos(id_activo)
);