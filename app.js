import express from "express"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
}))

app.get("/", (req, res) => {
  res.send("Welcome to the Assets Backend API")
})

export default app