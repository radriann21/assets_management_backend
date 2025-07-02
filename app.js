import express from "express"
import cors from "cors"
import departamentoRoutes from "./routes/departamentoRoutes.js"
import empleadoRoutes from "./routes/empleadoRoutes.js"
import activoRoutes from "./routes/activoRoutes.js"
import asignacionRoutes from "./routes/asignacionRoutes.js"

const app = express()
app.use(express.json())
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
}))

app.get("/", (req, res) => {
  res.send("Welcome to the Assets Backend API")
})

app.use("/api/departamentos", departamentoRoutes)
app.use("/api/empleados", empleadoRoutes)
app.use("/api/activos", activoRoutes)
app.use("/api/asignaciones", asignacionRoutes)

export default app