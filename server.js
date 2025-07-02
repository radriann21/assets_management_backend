import app from "./app.js";
import db from "./models/index.js";

const PORT = process.env.SERVER_PORT || 3001;

app.get("/", (req, res) => {
  res.send("Welcome to the Asset Management API");
});
